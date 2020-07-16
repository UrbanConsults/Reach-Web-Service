new_library({
    api: 1,
    name: "prop-types",
    version: "15.7.2",
    production: {
        src: "./index.min.js",
        sri: "sha512-HqXbFA3qo4JocbV4ZpByeRAxHhuMvBMvD987fp1sVueYYuDBT/kaLGdxxMF8Wc1LQWJDN3IBkjNXkYbo0IlUyQ=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {}
})