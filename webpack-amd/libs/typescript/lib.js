new_library({
    api: 1,
    name: "typescript",
    version: "3.9.6",
    production: {
        src: "./index.min.js",
        sri: "sha512-WP5jcEzMZUp0n/WwEwAu84QLtmbNzjtEhEnwD7azRNxXQgnIiR0XBNs6OX9hux5I7ghMYbfpe8OPuw66/zvKpA=="
    },
    development: {
        src: "./index.js"
    },
    head: (h, isDev) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {}
});