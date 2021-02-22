const { dirname } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports= {
    mode: 'development',
    entry: [
        path.resolve(__dirname,'./src/JSmodules')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets:false}),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 8080,
    },

};