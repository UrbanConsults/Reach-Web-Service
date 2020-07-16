const path = require("path");
const fs = require("fs");
const child = require("child_process");
const webpack = require('webpack');

// npm view carbon-components version
// shasum -b -a 512 libs/carbon-components/index.min.js | awk '{ print $1 }' | xxd -r -p | base64

const production = process.argv[5] == "prod" ? true : false;

const module_name = process.argv[process.argv.length - 1];

fs.writeFileSync("maybe-deps.json", "[]");

const manual_externals = [
    "prop-types",
    "react",
    "carbon-components",
    "carbon-icons",
    "react-dom",
    "object-assign",
    "react-is",
    "@carbon/icons-react"
];

const package_file = JSON.parse(fs.readFileSync(path.join(__dirname, `/node_modules/${module_name}/package.json`)).toString());

module.exports = {
    mode: production ? "production" : "development",
    entry: path.join(__dirname, `/node_modules/${module_name}/${package_file.main || "index.js"}`),
    output: {
        library: module_name,
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'libs', module_name),
        filename: `index${production ? ".min": ""}.js`
    },
    optimization: {
        minimize: production
    },
    externals: [
        function(context, request, callback) {

            if (manual_externals.indexOf(request) !== -1) {

                const depdency = JSON.parse((() => {
                    try {
                        return fs.readFileSync("deps.json");
                    } catch (e) {
                        return "{}";
                    }
                })());

                if (!depdency[request]) {
                    try {
                        let version = child.execSync(`npm view ${request} version`).toString();
                        depdency[request] = version.slice(0, version.length - 1);
                        // console.log(depdency[request]);
                        fs.writeFileSync("deps.json", JSON.stringify(depdency, null, 4));
                    } catch (e) {
                        let version = child.execSync(`npm view ${request.split("/")[0]} version`).toString();
                        depdency[request] = version.slice(0, version.length - 1);
                        // console.log(depdency[request]);
                        fs.writeFileSync("deps.json", JSON.stringify(depdency, null, 4));
                    }
                }

                return callback(null, 'amd ' + request);
            }

            const paths = ["../", "./", "/"].map(p => request.indexOf(p));


            if (paths.indexOf(0) === -1) { // not a local file


                const depdency = JSON.parse((() => {
                    try {
                        return fs.readFileSync("maybe-deps.json");
                    } catch (e) {
                        return "[]";
                    }
                })());

                depdency.push(request);

                fs.writeFileSync("maybe-deps.json", JSON.stringify(depdency.filter((v, i, s) => s.indexOf(v) == i), null, 4));
            }

            // Continue without externalizing the import
            callback();
        }
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: production ? 'production' : 'development',
            DEBUG: false
        })
    ]
};