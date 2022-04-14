const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/app/index.js',
    mode:'development',
    output:{
        filename:'app.bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins:[
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};