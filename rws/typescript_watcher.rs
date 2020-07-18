use std::process::Command;
use std::env::current_dir;

pub fn start_watcher () {
    dbg!(current_dir().unwrap());
    let output = Command::new(
        "third_party/node_modules/typescript/bin/tsc")
        // .arg(".")
//        .arg("control-panel/src/pages/index.tsx")
        .output()
        .expect("Failed to setup tsc.");

    dbg!(output);
}
