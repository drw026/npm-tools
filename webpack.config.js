var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        main: './main.js',
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].bundle.js',
        publicPath: '/js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
    },
};
