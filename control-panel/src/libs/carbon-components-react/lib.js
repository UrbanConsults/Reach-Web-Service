new_library({
    api: 1,
    name: "carbon-components-react",
    version: "7.15.0",
    production: {
        src: "./index.min.js",
        sri: "sha512-83JWcMqYQtoXqMPMyogRCgqsjQbUlpRS7pbUQTm+3x1301EKQOmf/s6k53TeidD4D6TvxF67qxdsZFeBnI5Knw=="
    },
    development: {
        src: "./index.js"
    },
    head: (h) => [ // html to add to head (style files, etc)
        
    ],
    // types: "types.d.ts",
    dependencies: {
    "prop-types": "15.7.2",
    "react": "16.13.1",
    "carbon-components": "10.15.0",
    "@carbon/icons-react": "10.13.0",
    "react-is": "16.13.1",
    "carbon-icons": "7.0.7",
    "react-dom": "16.13.1"
}
})