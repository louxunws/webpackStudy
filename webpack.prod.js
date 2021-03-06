'use strict'

const webpack = require('webpack')  
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin') ;  //css文件指纹
const OptimizeCssAssetsWebpckPlugin = require('optimize-css-assets-webpack-plugin');      //css文件压缩
const HtmlWebpackPlugin = require('html-webpack-plugin');      //html文件压缩
const CleanWebPackPlugin = require('clean-webpack-plugin');    //清除构建目录产物

module.exports = {

    mode:'production',

    // entry:'./src/index.js',      //单文件入口
    entry: {
        // 'search': './src/search.js',
        'index': './src/index.js'
    },

    output:{
        path: path.join(__dirname,'dist'),
        filename: '[name].[chunkhash:8].js'   //js文件指纹的设置  因为出口文件是一个js文件 , 在打包的时候会生成thunkhash , 所以js文件用thunkhash
    },

    module:{
        rules:[
            {
                test: /.js|.jsx$/,
                use: "babel-loader"    //解析js    npm i bable-loader @babel/preset-env @babel/core -D
            },
            {
                test: /.css$/,         //解析css   npm i style-loader css-loader -D
                use: [                  
                    // "style-loader",  //这里要注意  loader调用的时候是链式调用,从右往左进行调用,也就是先调用css-loader,把解析好的文件传递给style-loader
                    MiniCssExtractPlugin.loader,   //style-loader的功能和MiniCssExtractPlugin插件 是互斥的, 所以要使用文件指纹, 就不能使用styleloader
                    "css-loader",
                ]
            },
            {
                test: /.less$/,       //解析less  npm i style-loader css-loader less-loader -D
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",    //loader从右往左调用,把lessloader处理好的文件,传递给css-loader,css-loader把处理好的文件传递给style-loader
                    "css-loader",      //要注意顺序
                    "less-loader"
                ]
            },
            {
                test: /.(png|jpg|jpeg|gif)$/,  //解析图片  npm i file-loader -D
                use: [
                    {
                        loader: "file-loader",                   //file-loader 可以对图片资源进行解析
                        options: {
                            name: '[name]_[hash:8].[ext]'        //对图片资源设置文件指纹
                        }
                    }
                    // {
                    //     loader: "url-loader",     //url-loader也可以对图片资源进行解析 , url-loader可以对图片进行base64
                    //     options: {
                    //         limit:10240      //单位是字节,也就是10k  如果图片的大小小于10k webpack就自动进行一个base64
                    //     }
                    // }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf)$/,  //解析字体文件
                use: [
                    {
                        loader: "file-loader",                   //file-loader 可以对字体资源进行解析
                        options: {
                            name: '[name]_[hash:8].[ext]'        //对字体资源设置文件指纹
                        }
                    }
                   
                ]
            }
        ]
    },

    

    plugins: [
        new MiniCssExtractPlugin(  //因为style-loader是把css的样式直接插入到文件的header中 , 不会生成一个css文件.  这个插件会把css样式生成一个独立的文件
            {
                filename: '[name]_[contenthash:8].css'   // npm i mini-css-extract-plugin -D
            }
        ),
        new OptimizeCssAssetsWebpckPlugin({    //处理 css文件压缩    npm i optimize-css-assets-webpack-plugin -D
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')       //cssnano 是css 文件的预处理器
        }),
        new HtmlWebpackPlugin({               //处理html文件压缩   src文件中每个html文件都会对应一个这样的配置对象   npm i html-webpack-plugin -D
            template: path.join(__dirname, 'src/index.html'),    //webpackhtmlplugin 需要打包的  html模板的位置
            filename: 'index.html',                              //打包出来的html文件名称
            chunks: ['index'],                                   //指定生成出来的html需要哪些chunk  打包出来的js,css文件就是一个chunk inject属性为true会将打包好的js css chunk引入到这个html中
            inject: true,                                        //为true  打包出来的chunk 会自动注入到这个html中
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        })
        // new CleanWebPackPlugin()
    ]

    
   
}