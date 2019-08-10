'use strict'

const webpack = require('webpack')  
const path = require('path');
const CleanWebPackPlugin = require('clean-webpack-plugin');    //清除构建目录产物

module.exports = {

    mode:'development',

    // entry:'./src/index.js',      //单文件入口
    entry: {
        // 'search': './src/search.js',
        'index': './src/index.js'
    },

    output:{
        path: path.join(__dirname,'dist'),
        filename: '[name].bundle.js'   //js文件指纹的设置  因为出口文件是一个js文件 , 在打包的时候会生成thunkhash , 所以js文件用thunkhash
    },

    module:{
        rules:[
            {
                test: /.js|.jsx$/,
                use: "babel-loader"    //解析js    npm i bable-loader @babel/preset-env @babel/core -D
            },
            {
                test: /.css$/,         //解析css   npm i style-loader css-loader -D
                use: [                  //这里要注意  loader调用的时候是链式调用,从右往左进行调用,也就是先调用css-loader,把解析好的文件传递给style-loader
                    "style-loader",    
                    "css-loader",
                ]
            },
            {
                test: /.less$/,       //解析less  npm i style-loader css-loader less-loader -D
                use: [
                    "style-loader",    //loader从右往左调用,把lessloader处理好的文件,传递给css-loader,css-loader把处理好的文件传递给style-loader
                    "css-loader",      //要注意顺序
                    "less-loader"
                ]
            },
            {
                test: /.(png|jpg|jpeg|gif)$/,  //解析图片  npm i file-loader -D
                // use:  "file-loader"    
                use: [
                    {
                        loader: "url-loader",     //url-loader也可以对图片资源进行解析   url-loader可对图片进行base64
                        options: {
                            limit:10240      //单位是字节,也就是10k  如果图片的大小小于10k webpack就自动进行一个base64
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf)$/,  //解析字体文件
                use: "file-loader"
            }
        ]
    },

    //WDS和HotModleReplacementPlugin 一起使用开启热更新 不会和build一样会在磁盘输出文件 而是放在内存里

    plugins: [
        new webpack.HotModuleReplacementPlugin()        //这个插件是webpack自带的
        
    ],

    
    devServer: {                    //配置devServer
        contentBase: './dist',       //服务的基础目录
        hot: true,       //开启热更新
        port:8081

    }
}