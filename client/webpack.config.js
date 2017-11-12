var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './client/src/index.jsx',
    target: 'web',
    // externals: [nodeExternals()],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    resolve:{
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: false,
                    failOnError: false,
                    emitWarning: true,
                    // fix: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['airbnb']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[{
                    loader:"style-loader",
                }]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            { // Load svg files as raw text
                test: /\.svg/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
            { // Load markdown as raw text
                test: /\.md/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ],
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ],
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false,
            },
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'PAW_PRINTERS_MAPS_API': JSON.stringify(process.env.PAW_PRINTERS_MAPS_API),
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    stats: {
        colors: true,
        timings: true,
        chunks: false
    }
}
