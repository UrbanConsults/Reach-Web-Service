const path = require("path");
const fs = require("fs");
const child = require("child_process");


const package = process.argv[2];

fs.writeFileSync(path.join(__dirname, "deps.json"), "{}");

console.log(child.execSync(`webpack --config webpack.config.prod.js --type dev --mod ${package}`).toString());
console.log(child.execSync(`webpack --config webpack.config.prod.js --type prod --mod ${package}`).toString());

const version = child.execSync(`npm view ${package} version`).toString();

const shasum = child.execSync(`shasum -b -a 512 libs/${package}/index.min.js | awk '{ print $1 }' | xxd -r -p | base64`);

fs.writeFileSync(path.join(__dirname, "libs", package, "lib.js"), `
export default {
    api: 1,
    name: "${package}",
    version: "${version.slice(0, version.length - 1)}",
    sri: "sha512-${shasum.slice(0, shasum.length - 1)}",
    dependencies: ${fs.readFileSync(path.join(__dirname, "deps.json")).toString()},
    head: (h, isDev) => [ // html to add to head (style files, etc)
        
    ]
}
`.trim());