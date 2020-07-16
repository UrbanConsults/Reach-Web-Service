new_library({
    api: 1,
    name: "react-dom",
    version: "16.13.1",
    production: {
        src: "./index.min.js",
        sri: "sha512-gI+i18nuawLAYUORkPWHC/wAqGWvcNDUm11dKu0sdGBbEJocTh6JLG1Mz8YbPvExcw8tW+3ZjCBxK+rJpGD/GQ=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {
    "react": "16.13.1",
    "object-assign": "4.1.1"
}
})