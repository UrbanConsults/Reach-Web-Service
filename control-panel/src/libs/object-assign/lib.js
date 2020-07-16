new_library({
    api: 1,
    name: "object-assign",
    version: "4.1.1",
    production: {
        src: "./index.min.js",
        sri: "sha512-LbNqckcAA2QXZrwJy7nzunKZjjqvO3NgX2E2vi6cwQp23NWSlLOeZEDt1k0zPjPga+8ZF+0+NFjGHEOpma771w=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {}
})