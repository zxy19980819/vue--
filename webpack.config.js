const path=require('path')
var webpack = require('webpack')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
plugins:[
    new htmlWebpackPlugin({
        template:path.join(__dirname,'./index.html'),
        filename:'index.html'
    }),
    new VueLoaderPlugin()
],
    module:{
rules:[
    {test:/\.css$/,use:['style-loader','css-loader']},
    {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?name=[hash:8]-[name].[ext]'},
    {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
    {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
    {test:/\.vue$/,use:'vue-loader'}
]
    }
}