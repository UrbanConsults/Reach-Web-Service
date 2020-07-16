new_library({
    api: 1,
    name: "react",
    version: "16.13.1",
    production: {
        src: "./index.min.js",
        sri: "sha512-jR/BFEn95q5oSGq0hBiwpbviQFRvBmunwy2Kh92p/a2cBI3RtmoyPPUhhFtNPpwYHd2HCCQzxfQVt2fzMj3r0g=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {
    "object-assign": "4.1.1"
}
})