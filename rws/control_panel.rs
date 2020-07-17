use actix_rt::System;
use actix_web::{web, App, HttpResponse, HttpServer, HttpRequest, http::header::{DispositionType, ContentDisposition}, Error};
use tokio::runtime::Builder;
use actix_files as fs;
use std::env;
use std::path::PathBuf;
use actix_web_actors::ws;
use actix::{Actor, StreamHandler, Recipient};
use std::thread_local;
use std::{cell::RefCell, collections::HashMap, rc::Rc};
use actix::prelude::*;
use rand::prelude::ThreadRng;
use crate::rand::Rng;
use tokio::sync::watch;
use notify::{Watcher, RecommendedWatcher, RecursiveMode, Error as nError};
use lazy_static::lazy_static;
use std::sync::{Arc, Mutex};

lazy_static! {
    static ref FILE_WATCHER: Arc<(Mutex<watch::Sender<String>>, Mutex<watch::Receiver<String>>)> = make_channel();
}

fn make_channel() -> Arc<(Mutex<watch::Sender<String>>, Mutex<watch::Receiver<String>>)> {
    let (mut tx, mut rx) = watch::channel("".to_owned());
    Arc::new((Mutex::new(tx), Mutex::new(rx)))
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct Message(pub String);

#[derive(Message)]
#[rtype(usize)]
pub struct Connect {
    pub addr: Recipient<Message>,
}

/// Session is disconnected
#[derive(Message)]
#[rtype(result = "()")]
pub struct Disconnect {
    pub id: usize,
}

/*
#[derive(Message)]
#[rtype(result = "()")]
pub struct ClientMessage {
    /// Id of the client session
    pub id: usize,
    /// Peer message
    pub msg: String,
}*/

pub struct ReloadServer {
    sessions: Rc<RefCell<HashMap<usize, Recipient<Message>>>>,
    rng: ThreadRng
}

impl Default for ReloadServer {
    fn default() -> Self {
        let server = ReloadServer {
            sessions: Rc::new(RefCell::new(HashMap::new())),
            rng: rand::thread_rng()
        };

        server
    }
}

impl ReloadServer {
    /*pub fn send_message(&self, message: &str) {
        for id in self.sessions.keys() {
            if let Some(addr) = self.sessions.get(id) {
                let _ = addr.do_send(Message(message.to_owned()));
            }
        }
    }*/
}

/// Make actor from `ChatServer`
impl Actor for ReloadServer {
    /// We are going to use simple Context, we just need ability to communicate
    /// with other actors.
    type Context = Context<Self>;

    fn started(&mut self, ctx: &mut Context<Self>) {
        let sessions = self.sessions.clone();

        tokio::task::spawn_local(async move {
            let watcher = Arc::clone(&FILE_WATCHER);

            let mut rx = watcher.1.lock().unwrap();
            while let Some(value) = rx.recv().await {
                println!("GOT CHANGE {:?}", value);
                // self.send_message(value.as_str());
                let mut ws_sessions = sessions.borrow_mut();
                for id in ws_sessions.keys() {
                    if let Some(addr) = ws_sessions.get(id) {
                        let _ = addr.do_send(Message(value.clone()));
                    }
                }
            }
        });
     }
}

impl Handler<Connect> for ReloadServer {
    type Result = usize;

    fn handle(&mut self, msg: Connect, _: &mut Context<Self>) -> Self::Result {

        // register session with random id
        let id = self.rng.gen::<usize>();
        self.sessions.borrow_mut().insert(id, msg.addr);

        // send id back
        id
    }
}

impl Handler<Disconnect> for ReloadServer {
    type Result = ();

    fn handle(&mut self, msg: Disconnect, _: &mut Context<Self>) {
        self.sessions.borrow_mut().remove(&msg.id);
    }
}
/*
impl Handler<ClientMessage> for ReloadServer {
    type Result = ();

    fn handle(&mut self, msg: ClientMessage, _: &mut Context<Self>) {
        self.send_message(msg.msg.as_str());
    }
}*/


pub struct WebSocketSession {
    /// unique session id
    id: usize,
    reload_actor: Addr<ReloadServer>
}

impl Actor for WebSocketSession {
    type Context = ws::WebsocketContext<Self>;

    fn started(&mut self, ctx: &mut Self::Context) {

        let addr = ctx.address();
        self.reload_actor.send(Connect {
            addr: addr.recipient()
        }).into_actor(self).then(|res, act, ctx| {
            match res {
                Ok(res) => act.id = res,
                // something is wrong with chat server
                _ => ctx.stop(),
            }
            fut::ready(())
        }).wait(ctx);
 
    }

    fn stopping(&mut self, _: &mut Self::Context) -> Running {
        // notify chat server
        self.reload_actor.do_send(Disconnect { id: self.id });
        Running::Stop
    }
}

/// Handle messages from chat server, we simply send it to peer websocket
impl Handler<Message> for WebSocketSession {
    type Result = ();

    fn handle(&mut self, msg: Message, ctx: &mut Self::Context) {
        ctx.text(msg.0);
    }
}

/// Handler for ws::Message message
impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for WebSocketSession {
    // type Context = ws::WebsocketContext<Self>;

    fn handle(&mut self, msg: Result<ws::Message, ws::ProtocolError>, ctx: &mut Self::Context) {
        
        match msg {
            Ok(ws::Message::Ping(msg)) => ctx.pong(&msg),
            Ok(ws::Message::Text(text)) => ctx.text(text),
            Ok(ws::Message::Binary(bin)) => ctx.binary(bin),
            _ => (),
        }
    }
}

async fn index_ws(
    req: HttpRequest, 
    stream: web::Payload,
    srv: web::Data<Addr<ReloadServer>>,
) -> Result<HttpResponse, Error> {
    let resp = ws::start(WebSocketSession {
        id: 0,
        reload_actor: srv.get_ref().clone()
    }, &req, stream);
    resp
}

async fn index(req: HttpRequest) -> Result<fs::NamedFile, Error> {
    let mut root = env::current_dir().unwrap();
    root.push("control-panel");
    root.push("src");

    let path: PathBuf = req.match_info().query("filename").parse().unwrap();
    if path.to_str().unwrap().len() == 0 {
        root.push("index.html");
    } else {
        root.push(path);
    }
    
    let file = fs::NamedFile::open(root);
    match file {
        Ok(f) => {
            Ok(f.use_last_modified(true)
                .set_content_disposition(ContentDisposition {
                    disposition: DispositionType::Inline,
                    parameters: vec![],
                }))
        },
        Err(_) => {
            let mut root = env::current_dir().unwrap();
            root.push("control-panel");
            root.push("src");
            root.push("index.html");
            Ok(fs::NamedFile::open(root).unwrap().use_last_modified(true)
                .set_content_disposition(ContentDisposition {
                    disposition: DispositionType::Inline,
                    parameters: vec![],
                }))
        }
    }
    
}

pub fn server() {
    let mut single_rt = Builder::new()
    .basic_scheduler()
    .enable_all()
    .build()
    .unwrap();

    // Automatically select the best implementation for your platform.
    let mut watcher: RecommendedWatcher = Watcher::new_immediate(|res: Result<notify::event::Event, nError>| {
        match res {
            Ok(event) => {
                let watcher = Arc::clone(&FILE_WATCHER);
                let tx = watcher.0.lock().unwrap();
                for path in event.paths {
                    tx.broadcast(path.into_os_string().into_string().unwrap()).unwrap();
                }
            },
            Err(e) => {
                println!("watch error: {:?}", e);
            }
        }
    }).unwrap();

    // Add a path to be watched. All files and directories at that path and
    // below will be monitored for changes.
    watcher.watch("./control-panel", RecursiveMode::Recursive).unwrap();
    
  
    let local = tokio::task::LocalSet::new();
    let system_fut = actix_rt::System::run_in_tokio("Dashboard Server", &local);

    local.block_on(&mut single_rt, async {
      tokio::task::spawn_local(system_fut);

      let server = ReloadServer::default().start();
  
      let _ = actix_web::HttpServer::new(move || {
            App::new()
            .data(server.clone())
            .route("/livereload", web::get().to(index_ws))
            .route("/{filename:.*}", web::get().to(index))
        })
        .workers(1)
        .bind("127.0.0.1:8086")
        .unwrap()
        .run()
        .await;
    });
}