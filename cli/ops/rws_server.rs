// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
use super::dispatch_json::{Deserialize, JsonOp, Value};
use crate::op_error::OpError;
use crate::state::State;
use deno_core::CoreIsolate;
use deno_core::CoreIsolateState;
use deno_core::ErrBox;
use deno_core::ZeroCopyBuf;
use futures::future::poll_fn;
use futures::{channel::oneshot::Sender, future::FutureExt};
use notify::event::Event as NotifyEvent;
use notify::Error as NotifyError;
use notify::EventKind;
use notify::RecommendedWatcher;
use notify::RecursiveMode;
use notify::Watcher;
use serde::Serialize;
use std::convert::From;
use std::{rc::Rc, path::PathBuf, cell::RefCell};
use tokio::sync::mpsc;
use std::cell::{Ref, RefMut};

use crate::{SuperUnsafeCell, THREAD_CHANNEL, ChannelRx};
use actix_web::HttpRequest;
use actix_web::{dev::Body, HttpResponse as Response};

pub fn init(i: &mut CoreIsolate, s: &State) {
  i.register_op("op_rws_server_start", s.stateful_json_op2(op_rws_server_start));
  i.register_op("op_rws_server_poll", s.stateful_json_op2(op_rws_server_poll));
  i.register_op("op_rws_server_resp", s.stateful_json_op2(op_rws_server_resp));
}

struct FsEventsResource {
  #[allow(unused)]
  watcher: RecommendedWatcher,
  receiver: mpsc::Receiver<Result<FsEvent, ErrBox>>,
}

/// Represents a file system event.
///
/// We do not use the event directly from the notify crate. We flatten
/// the structure into this simpler structure. We want to only make it more
/// complex as needed.
///
/// Feel free to expand this struct as long as you can add tests to demonstrate
/// the complexity.
#[derive(Serialize, Debug)]
struct FsEvent {
  kind: String,
  paths: Vec<PathBuf>,
}

impl From<NotifyEvent> for FsEvent {
  fn from(e: NotifyEvent) -> Self {
    let kind = match e.kind {
      EventKind::Any => "any",
      EventKind::Access(_) => "access",
      EventKind::Create(_) => "create",
      EventKind::Modify(_) => "modify",
      EventKind::Remove(_) => "remove",
      EventKind::Other => todo!(), // What's this for? Leaving it out for now.
    }
    .to_string();
    FsEvent {
      kind,
      paths: e.paths,
    }
  }
}

struct ServerResource {
  channel: Rc<(SuperUnsafeCell<tokio::sync::mpsc::Sender<ChannelRx>>, SuperUnsafeCell<tokio::sync::mpsc::Receiver<ChannelRx>>)>
}

pub fn op_rws_server_start(
  isolate_state: &mut CoreIsolateState,
  state: &State,
  args: Value,
  _zero_copy: &mut [ZeroCopyBuf],
) -> Result<JsonOp, OpError> {

  let channel = THREAD_CHANNEL.with(|channel| {
    Rc::clone(channel)
  });

  let resource = ServerResource { channel: channel };
  let rid = borrow_loop_mut(&isolate_state.resource_table, |mut table| {
    table.add("rwsEvents", Box::new(resource))
  });
  Ok(JsonOp::Sync(json!(rid)))
}

pub fn borrow_loop<'a, T, F, X>(item: &Rc<RefCell<T>>, callback: F) -> X where F: FnOnce(Ref<T>) -> X {
  loop {
    if let Ok(i) = item.try_borrow() {
      return callback(i);
    }
  }
}

pub fn borrow_loop_mut<'a, T, F, X>(item: &Rc<RefCell<T>>, callback: F) -> X where F: FnOnce(RefMut<T>) -> X {
  loop {
    if let Ok(i) = item.try_borrow_mut() {
      return callback(i);
    }
  }
}

pub fn op_rws_server_poll(
  isolate_state: &mut CoreIsolateState,
  _state: &State,
  args: Value,
  _zero_copy: &mut [ZeroCopyBuf],
) -> Result<JsonOp, OpError> {

  #[derive(Deserialize)]
  struct PollArgs {
    rid: u32,
  }
  let PollArgs { rid } = serde_json::from_value(args)?;
  let resource_table = isolate_state.resource_table.clone();

  let f = async move {

    let rx = borrow_loop(&resource_table, |table| {
      let receiver = table.get::<ServerResource>(rid).ok_or_else(OpError::bad_resource_id).unwrap();
      Rc::clone(&receiver.channel)
    });

    let result = rx.1.borrow_mut().recv().await;

    match result {
      Some(req) => {
        let uri = req.0.uri().to_string();
        let resp_id = borrow_loop_mut(&resource_table, |mut table| {
          table.add("rwsEvents", Box::new(req))
        });
        Ok(json!({ "value": {
          "url": uri,
          "respId": resp_id
        }, "done": false }))
      },
      None => {
        Ok(json!({ "value": {
          "url": "",
          "respId": 0
        }, "done": false }))
      }
    }
  };
  Ok(JsonOp::Async(f.boxed_local()))
}


pub fn op_rws_server_resp(
  isolate_state: &mut CoreIsolateState,
  _state: &State,
  args: Value,
  _zero_copy: &mut [ZeroCopyBuf],
) -> Result<JsonOp, OpError> {

  #[derive(Deserialize, Debug)]
  struct RespArgs {
    rid: u32,
    value: String
  }
  let RespArgs { rid, value } = serde_json::from_value(args)?;

  let resource_table = isolate_state.resource_table.clone();

  {
    let mut resource_table = resource_table.borrow_mut();
    let send_rx = resource_table.remove::<ChannelRx>(rid).ok_or_else(OpError::bad_resource_id)?;

    send_rx.1.send(actix_web::HttpResponse::Ok()
    .content_type("text/html")
    .body(value)).unwrap();
  }
  
  Ok(JsonOp::Sync(json!({"value": true})))
}