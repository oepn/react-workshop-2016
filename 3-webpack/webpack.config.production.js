var webpack = require('webpack');
var config = require('./webpack.config');

module.exports = Object.assign({}, config, {
    cache: false,
    debug: false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
});
