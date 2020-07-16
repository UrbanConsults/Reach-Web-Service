new_library({
    api: 1,
    name: "@carbon/icons-react",
    version: "10.13.0",
    production: {
        src: "./index.min.js",
        sri: "sha512-sL0Zl7utdCLWX+mqq7etzneZ2ygCF4lkfEflXA5cy1QskGIYijtD7ExfiNKnUeGimlSz+Gy5iD4DhrxSiGazxw=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)

    ],
    // types: "types.d.ts",
    dependencies: {
        "prop-types": "15.7.2",
        "react": "16.13.1"
    }
})