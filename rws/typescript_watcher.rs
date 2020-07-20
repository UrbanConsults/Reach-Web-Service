use std::process::{ Command, Child, Stdio };
use std::env::current_dir;
use walkdir::WalkDir;
use tokio::{ spawn, time::delay_for };
use std::time::Duration;

// This searches the given directory and looks for tsconfig.json files inside. It'll watch any
// config file continuously, but it will only poll for new config files every 30 seconds.

pub fn start_tsc_watcher (folder: String) {
    spawn(async move {
        render_files(folder).await
    });
}

struct WatchedFile {
    path: String,
    process: Child
}

impl PartialEq<String> for WatchedFile {
    fn eq(&self, other: &String) -> bool {
        self.path == *other
    }
}

impl WatchedFile {
    fn new(file: &str) -> WatchedFile {
        let child = Command::new(
            "third_party/node_modules/typescript/bin/tsc")
            .arg("--project")
            .arg(&file)
            .arg("-w")
            .stdout(Stdio::null())
            .spawn()
            .expect("Failed to setup tsc.");
        WatchedFile { path: file.to_owned(), process: child }
    }
}

async fn render_files (folder: String) {

    let mut children: Vec<WatchedFile> = vec!();

    loop {

        let files: Vec<String> = WalkDir::new(&folder).into_iter().filter_map(|e| {
            e.ok().and_then(|entry| {
                if entry.file_name() == "tsconfig.json" {
                    entry.path().to_str().map(|s| {s.to_owned()})
                } else {
                    None
                }
            })
        }).collect();

        // Add any new tsconfigs
        for file in files.iter() {
            if (children.iter().all(|child| child != file)) {
                children.push(WatchedFile::new(&file))
            }
        }

        // Remove and clean up any deleted tsconfigs
        children = children.into_iter().filter_map(|mut child| {
            if (files.iter().any(|path| path == &child.path)) {
                Some(child)
            } else {
                child.process.kill();
                None
            }
        }).collect();

        delay_for(Duration::from_millis(30_000u64)).await

    }

}
