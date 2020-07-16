new_library({
    api: 1,
    name: "react-is",
    version: "16.13.1",
    production: {
        src: "./index.min.js",
        sri: "sha512-kC5fEsxGeYfsy7i7EdF+t+UYVjeu71AmeCwb7TvtIra3nI88Rlq+EizgMJZ0GuP/rn1UeHFnKUV/GwIAISb3IQ=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {}
})