new_library({
    api: 1,
    name: "carbon-icons",
    version: "7.0.7",
    production: {
        src: "./index.min.js",
        sri: "sha512-PYSi+y4XvJhjfn/npQuwwbJnHfa143n9xMkig4XYDb5xuAHu19Utyo9P7zmlxFilPNwZCJ9LUyFp4wJjpHeHnw=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {}
})