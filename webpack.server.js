const merge = require("webpack-merge")
const baseConfig = require("./webpack.base")
const path = require("path")
const webpackNodeExternals=require("webpack-node-externals")

const config={
    target:"node",
///////////entry
    entry:"./src/index.js",
    /////////making bundle.js
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,"build")
    },
    externals : [webpackNodeExternals()]
}
module.exports = merge(baseConfig,config)