var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: ['babel-polyfill', './app/main']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.js']
    },
    cache: true,
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'app')
            }
        ]
    }
};
