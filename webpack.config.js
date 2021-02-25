const { dirname } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports= {
    mode: 'development',
    entry: [
        path.resolve(__dirname,'src/JSmodules/app.js'),
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets:false}),
        new HtmlWebpackPlugin({
            template: 'src/html/index.html',
            inject: true
        }),
    ],
    module: {
          rules: [
            { test: /\.css$/, use: 'style-loader'},   
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.css$/, use: 'css-loader' }
          ]
        },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9000,
    },

};