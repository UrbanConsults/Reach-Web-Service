new_library({
    api: 1,
    name: "react-refresh",
    version: "0.8.3",
    production: {
        src: "./index.min.js",
        sri: "sha512-xUtZ2Z3AA62i8vcmG7IjY5X8B/PIMCO5evX0KdZOUQKdEHO3jPJMKfqxAVxj4JoWOf5A4EfRE5ibslUnVDjqKg=="
    },
    development: {
        src: "./index.js"
    },
    head: (h, isDev) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {}
});