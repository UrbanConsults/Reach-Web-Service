new_library({
    api: 1,
    name: "react-router",
    version: "5.2.0",
    production: {
        src: "./index.min.js",
        sri: "sha512-0PGvnxM9Nt8FK+396WNobuQwE4s+53D/3nXl1YPPiPVHKm0CuVchl3bq7p6XDmQkW8MxQKS8CpkAaoE6BJBmQA=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {
    "react": "16.13.1",
    "prop-types": "15.7.2",
    "react-is": "16.13.1"
}
})