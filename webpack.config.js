const path=require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports={
    // 建置的模式
    mode:"development", // 預設 production
    // 入口
    entry:"./src/index.js",
    // 輸出
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist")
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new HtmlWebpackPlugin({
            template: "./dist/index.html",
            favicon: "./images/favicon.ico",
         }),
    ],
    // DevServer 設定
    devServer:{
        static:"./dist"
    },
    // 模組載入規則
    module:{
        rules:[
            // SASS 樣式表載入規則
            {
                test:/\.scss$/i,
                use:["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
};