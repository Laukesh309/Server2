const path = require("path")
const merge = require("webpack-merge")
 const baseConfig= require("./webpack.base")
const config={
    entry : "./src/client/client.js",
    ///////////////outputbundle.js
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"public")
    },
    module:{
        rules:[{
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                   presets: [
                      'react',
                      'stage-0',
                      ['env',{targets:{browser:['last 2 versions']}}]
                    ]
                }
        }]
    }
}
module.exports= merge(baseConfig,config)