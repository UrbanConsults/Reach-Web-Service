new_library({
    api: 1,
    name: "carbon-components",
    version: "10.15.0",
    production: {
        src: "./index.min.js",
        sri: "sha512-Hj1N/kfP5BVQK0jiDIBuCQmQSs9hRHSGMuRx4Jdu1s9/hEKzoFCN8v6TbJs8oIjbxlxJkhvB0IGBbklSTDT9Bg=="
    },
    development: {
        src: "./index.js"
    },
    head: (h, isDev) => [
        h("link", {
            rel: "stylesheet",
            href: "./carbon-components.min.css",
            integrity: "sha512-BZWQUgFjzSPeVemLnv+ZXiAJta9No2eY/x+DNHFyPV+wAn2lrCtN/MJP/v5DTgkXiXaiYbybv/CCZ6Fyvu7meg=="
        })
    ],
    // types: "types.d.ts",
    dependencies: {}
})