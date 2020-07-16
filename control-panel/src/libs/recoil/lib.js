new_library({
    api: 1,
    name: "recoil",
    version: "0.0.10",
    production: {
        src: "./index.min.js",
        sri: "sha512-z4eva8a0m6Mm8mTTBCD0smKi9ZVcvVs3p4wUuUmEl7PR58SCVhbwT3A5z7jxgwSDZFmcczCUqeR5FceE1rmjRQ=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)

    ],
    // types: "types.d.ts",
    dependencies: {
        "react": "16.13.1",
        "react-dom": "16.13.1"
    }
});