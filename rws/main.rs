// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
// #![deny(warnings)]
#![allow(dead_code)]

extern crate dissimilar;
#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate log;
extern crate futures;
#[macro_use]
extern crate serde_json;
extern crate clap;
extern crate deno_core;
extern crate indexmap;
#[cfg(unix)]
extern crate nix;
extern crate rand;
extern crate regex;
extern crate serde;
extern crate serde_derive;
extern crate tokio;
extern crate url;
extern crate deno_cli;

pub use deno_lint::dprint_plugin_typescript;
pub use deno_lint::swc_common;
pub use deno_lint::swc_ecma_ast;
pub use deno_lint::swc_ecma_parser;
pub use deno_lint::swc_ecma_visit;

use deno_cli::doc::parser::DocFileLoader;
use deno_cli::file_fetcher::SourceFile;
use deno_cli::file_fetcher::SourceFileFetcher;
use deno_cli::fs as deno_fs;
use deno_cli::global_state::GlobalState;
use deno_cli::msg::{self, MediaType};
use deno_cli::op_error::OpError;
use deno_cli::permissions::Permissions;
use deno_cli::tsc::TargetLib;
use deno_cli::{worker::MainWorker};
use deno_core::v8_set_flags;
use deno_core::ErrBox;
use deno_core::EsIsolate;
use deno_core::{v8::PromiseRejectMessage, ModuleSpecifier};
use deno_cli::flags::DenoSubcommand;
use deno_cli::flags::Flags;
use futures::future::FutureExt;
use futures::Future;
use log::Level;
use log::Metadata;
use log::Record;
use std::env;
use std::io::Read;
use std::io::Write;
use std::path::{ PathBuf, Path };
use std::{rc::Rc, pin::Pin, cell::RefCell, time::Duration, thread};
use deno_cli::{colors, upgrade::upgrade_command};
use url::Url;
use tokio::sync::{oneshot, mpsc};
use tokio::runtime::*;
use actix_rt;
use actix_web::HttpRequest;
use actix_web::*;
use futures::{StreamExt};

mod control_panel;
mod typescript_watcher;
use typescript_watcher::start_tsc_watcher;

static LOGGER: Logger = Logger;

pub type ChannelRx = (HttpRequest, oneshot::Sender<HttpResponse>);
// type ChannelRx = (u32, oneshot::Sender<u32>);

thread_local! {
  pub static THREAD_CHANNEL: Rc<(SuperUnsafeCell<tokio::sync::mpsc::Sender<ChannelRx>>, SuperUnsafeCell<tokio::sync::mpsc::Receiver<ChannelRx>>)> = Rc::new(wrap_channel())
}

fn wrap_channel() -> (SuperUnsafeCell<tokio::sync::mpsc::Sender<ChannelRx>>, SuperUnsafeCell<tokio::sync::mpsc::Receiver<ChannelRx>>) {
  let (sender, receiver) = mpsc::channel::<ChannelRx>(100 * 1048);

  (SuperUnsafeCell::new(sender), SuperUnsafeCell::new(receiver))
}

// TODO(ry) Switch to env_logger or other standard crate.
struct Logger;

impl log::Log for Logger {
  fn enabled(&self, metadata: &Metadata) -> bool {
    metadata.level() <= log::max_level()
  }

  fn log(&self, record: &Record) {
    if self.enabled(record.metadata()) {
      let mut target = record.target().to_string();

      if let Some(line_no) = record.line() {
        target.push_str(":");
        target.push_str(&line_no.to_string());
      }

      if record.level() >= Level::Info {
        eprintln!("{}", record.args());
      } else {
        eprintln!("{} RS - {} - {}", record.level(), target, record.args());
      }
    }
  }
  fn flush(&self) {}
}

fn write_to_stdout_ignore_sigpipe(bytes: &[u8]) -> Result<(), std::io::Error> {
  use std::io::ErrorKind;

  match std::io::stdout().write_all(bytes) {
    Ok(()) => Ok(()),
    Err(e) => match e.kind() {
      ErrorKind::BrokenPipe => Ok(()),
      _ => Err(e),
    },
  }
}

fn write_lockfile(global_state: GlobalState) -> Result<(), std::io::Error> {
  if global_state.flags.lock_write {
    if let Some(ref lockfile) = global_state.lockfile {
      let g = lockfile.lock().unwrap();
      g.write()?;
    } else {
      eprintln!("--lock flag must be specified when using --lock-write");
      std::process::exit(11);
    }
  }
  Ok(())
}

fn print_cache_info(state: &GlobalState) {
  println!(
    "{} {:?}",
    colors::bold("DENO_DIR location:"),
    state.dir.root
  );
  println!(
    "{} {:?}",
    colors::bold("Remote modules cache:"),
    state.file_fetcher.http_cache.location
  );
  println!(
    "{} {:?}",
    colors::bold("TypeScript compiler cache:"),
    state.dir.gen_cache.location
  );
}

// TODO(bartlomieju): this function de facto repeats
// whole compilation stack. Can this be done better somehow?
async fn print_file_info(
  worker: &MainWorker,
  module_specifier: ModuleSpecifier,
) -> Result<(), ErrBox> {
  let global_state = worker.state.borrow().global_state.clone();

  let out = global_state
    .file_fetcher
    .fetch_source_file(&module_specifier, None, Permissions::allow_all())
    .await?;

  println!(
    "{} {}",
    colors::bold("local:"),
    out.filename.to_str().unwrap()
  );

  println!(
    "{} {}",
    colors::bold("type:"),
    msg::enum_name_media_type(out.media_type)
  );

  let module_specifier_ = module_specifier.clone();

  global_state
    .prepare_module_load(
      module_specifier_.clone(),
      None,
      TargetLib::Main,
      Permissions::allow_all(),
      false,
      global_state.maybe_import_map.clone(),
    )
    .await?;
  global_state
    .clone()
    .fetch_compiled_module(module_specifier_, None)
    .await?;

  if out.media_type == msg::MediaType::TypeScript
    || (out.media_type == msg::MediaType::JavaScript
      && global_state.ts_compiler.compile_js)
  {
    let compiled_source_file = global_state
      .ts_compiler
      .get_compiled_source_file(&out.url)
      .unwrap();

    println!(
      "{} {}",
      colors::bold("compiled:"),
      compiled_source_file.filename.to_str().unwrap(),
    );
  }

  if let Ok(source_map) = global_state
    .clone()
    .ts_compiler
    .get_source_map_file(&module_specifier)
  {
    println!(
      "{} {}",
      colors::bold("map:"),
      source_map.filename.to_str().unwrap()
    );
  }

  let es_state_rc = EsIsolate::state(&worker.isolate);
  let es_state = es_state_rc.borrow();

  if let Some(deps) = es_state.modules.deps(&module_specifier) {
    println!("{}{}", colors::bold("deps:\n"), deps.name);
    if let Some(ref depsdeps) = deps.deps {
      for d in depsdeps {
        println!("{}", d);
      }
    }
  } else {
    println!(
      "{} cannot retrieve full dependency graph",
      colors::bold("deps:"),
    );
  }

  Ok(())
}

fn get_types(unstable: bool) -> String {
  if unstable {
    format!(
      "{}\n{}\n{}\n{}",
      deno_cli::js::DENO_NS_LIB,
      deno_cli::js::SHARED_GLOBALS_LIB,
      deno_cli::js::WINDOW_LIB,
      deno_cli::js::UNSTABLE_NS_LIB,
    )
  } else {
    format!(
      "{}\n{}\n{}",
      deno_cli::js::DENO_NS_LIB,
      deno_cli::js::SHARED_GLOBALS_LIB,
      deno_cli::js::WINDOW_LIB,
    )
  }
}


fn human_size(bytse: f64) -> String {
  let negative = if bytse.is_sign_positive() { "" } else { "-" };
  let bytse = bytse.abs();
  let units = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  if bytse < 1_f64 {
    return format!("{}{} {}", negative, bytse, "Bytes");
  }
  let delimiter = 1024_f64;
  let exponent = std::cmp::min(
    (bytse.ln() / delimiter.ln()).floor() as i32,
    (units.len() - 1) as i32,
  );
  let pretty_bytes = format!("{:.2}", bytse / delimiter.powi(exponent))
    .parse::<f64>()
    .unwrap()
    * 1_f64;
  let unit = units[exponent as usize];
  format!("{}{} {}", negative, pretty_bytes, unit)
}

#[test]
fn human_size_test() {
  assert_eq!(human_size(16_f64), "16 Bytes");
  assert_eq!(human_size((16 * 1024) as f64), "16 KB");
  assert_eq!(human_size((16 * 1024 * 1024) as f64), "16 MB");
  assert_eq!(human_size(16_f64 * 1024_f64.powf(3.0)), "16 GB");
  assert_eq!(human_size(16_f64 * 1024_f64.powf(4.0)), "16 TB");
  assert_eq!(human_size(16_f64 * 1024_f64.powf(5.0)), "16 PB");
  assert_eq!(human_size(16_f64 * 1024_f64.powf(6.0)), "16 EB");
  assert_eq!(human_size(16_f64 * 1024_f64.powf(7.0)), "16 ZB");
  assert_eq!(human_size(16_f64 * 1024_f64.powf(8.0)), "16 YB");
}


/*
async fn send() -> u32 {
  let mut sender = THREAD_CHANNEL.with(|channel| {
    channel.0.clone()
  });
  let (resp_tx, resp_rx) = oneshot::channel::<u32>();
  sender.send((0, resp_tx)).await.ok().unwrap();
  let res = resp_rx.await.unwrap();
  res
}*/

async fn main_handler(
  req: HttpRequest,
  mut body: actix_web::web::Payload,
) -> actix_web::HttpResponse {
/*
  let mut bytes = actix_web::web::BytesMut::new();
  while let Some(item) = body.next().await {
      bytes.extend_from_slice(&item.unwrap());
  }

  // println!("thread: {:?}", std::thread::current().id());

  if bytes.len() > 0 {
      println!("Req bytes: {:?}", bytes);
  }

  actix_web::HttpResponse::Ok()
  .content_type("text/html")
  .body("<h2>hello</h2>")
  */

  let mut sender = THREAD_CHANNEL.with(|channel| {
    Rc::clone(channel)
  });
  let (resp_tx, resp_rx) = oneshot::channel::<HttpResponse>();
  sender.0.borrow_mut().send((req, resp_tx)).await.ok().unwrap();
  let res = resp_rx.await;
  match res {
    Ok(result) => result,
    Err(error) => {
      println!("{:?}", error);
      actix_web::HttpResponse::Ok()
      .content_type("text/html")
      .body("<h2>error</h2>")
    }
  }

  /*actix_web::HttpResponse::Ok()
  .content_type("text/html")
  .body("<h2>hello</h2>")*/
}

pub struct SuperUnsafeCell<T> {
  item: core::cell::UnsafeCell<T>
}

impl<T> SuperUnsafeCell<T> {
  pub fn new(item: T) -> Self {
      Self { item: core::cell::UnsafeCell::new(item) }
  }

  pub fn borrow(&self) -> &T {
      let self_bytes = unsafe { &*self.item.get() };
      self_bytes
  }

  pub fn borrow_mut(&self) -> &mut T {
      let self_bytes = unsafe { &mut *self.item.get() };
      self_bytes
  }
}

//tokio::task::JoinHandle<Result<(), ErrBox>>

fn new_js_context() -> tokio::task::JoinHandle<Result<(), ErrBox>> {
/*
  tokio::task::spawn_local(async {

    let channel = THREAD_CHANNEL.with(|channel| {
       Rc::clone(channel)
    });

    while let Some(res) = channel.1.borrow_mut().recv().await {
      res.1.send(actix_web::HttpResponse::Ok()
      .content_type("text/html")
      .body("<h2>hello</h2>")).unwrap();
    }

    Ok(())
  })
  */
  tokio::task::spawn_local(async {
    let args: Vec<String> = env::args().collect();
    let mut flags = deno_cli::flags::flags_from_vec(args);

    flags.subcommand = DenoSubcommand::Repl;

    let main_module = ModuleSpecifier::resolve_url_or_path("./__$deno$eval.ts").unwrap();
    let global_state = GlobalState::new(flags)?;
    let mut worker = MainWorker::create(global_state, main_module.clone())?;
    let main_module_url = main_module.as_url().to_owned();
    // Create a dummy source file.
    let source_code = r###"
      const s = Deno.watchRWS();
      for await (const req of s) {
        console.log(req.respId);
        Deno.sendRWS(req.respId, "<h1>hello</h1>");
      }
    "###.to_owned().into_bytes();

    let source_file = SourceFile {
      filename: main_module_url.to_file_path().unwrap(),
      url: main_module_url,
      types_header: None,
      media_type: MediaType::JavaScript,
      source_code,
    };
    // Save our fake file into file fetcher cache
    // to allow module access by TS compiler (e.g. op_fetch_source_files)
    worker
      .state
      .borrow()
      .global_state
      .file_fetcher
      .save_source_file_in_cache(&main_module, source_file);
    debug!("main_module {}", &main_module);
    worker.execute_module(&main_module).await?;
    worker.execute("window.dispatchEvent(new Event('load'))")?;
    (&mut *worker).await?;
    worker.execute("window.dispatchEvent(new Event('unload'))")?;

    Ok(())
  })
}

pub fn main() {
  #[cfg(windows)]
  colors::enable_ansi(); // For Windows 10

  log::set_logger(&LOGGER).unwrap();

  let args: Vec<String> = env::args().collect();
  let mut flags = deno_cli::flags::flags_from_vec(args);

  flags.subcommand = DenoSubcommand::Run { script: "/eval.js".to_string() };

  if let Some(ref v8_flags) = flags.v8_flags {
    let mut v8_flags_ = v8_flags.clone();
    v8_flags_.insert(0, "UNUSED_BUT_NECESSARY_ARG0".to_string());
    v8_set_flags(v8_flags_);
  }

  let log_level = match flags.log_level {
    Some(level) => level,
    None => Level::Info, // Default log level
  };
  log::set_max_level(log_level.to_level_filter());


  let mut single_rt = Builder::new()
  .basic_scheduler()
  .enable_all()
  .build()
  .unwrap();

  let local = tokio::task::LocalSet::new();
  let system_fut = actix_rt::System::run_in_tokio("main", &local);
  local.block_on(&mut single_rt, async {
    tokio::task::spawn_local(system_fut);

    start_tsc_watcher("control-panel".to_owned());
    start_tsc_watcher("example-app".to_owned());

    let _ = actix_web::HttpServer::new(|| {
        // actix_web::App::new().service(actix_web::web::resource("/").to(|| async { "<h1>Hello world!</h1>" }))
        actix_web::App::new()
            .data(new_js_context())
            .service(actix_web::web::resource("*").to(main_handler))
    })
    .bind("127.0.0.1:8083")
    .unwrap()
    .run()
    .await;
  });
}
