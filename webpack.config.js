"use strict";
var _a = require('path'), join = _a.join, resolve = _a.resolve;
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var env = process && process.env && process.env.NODE_ENV;
var dev = !(env && env === 'production');
var tsConfig = dev ? { configFileName: 'tsconfig.prod.json' } : {};
var projectName = 'Iris';
var libraryName = 'iris';
var entry = dev ? [
    // 'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:8081',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    ("./src/" + libraryName + ".ts")
] : join(__dirname, "src/" + libraryName + ".ts");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    entry: {
        index: entry
    },
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: libraryName,
        filename: libraryName + ".js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] }
                    },
                    {
                        loader: 'ts-loader',
                        options: tsConfig
                    }
                ],
                exclude: [
                    join(__dirname, 'node_modules'),
                    join(__dirname, 'test')
                ]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js"
        }),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
        new HtmlWebpackPlugin({
            inject: true,
            title: projectName,
            filename: "index.html",
            template: join(__dirname, "src/template/common.html"),
            hash: true,
            chunks: ["common", "index"]
        }),
        new TypedocWebpackPlugin({
            theme: 'minimal',
            out: 'docs',
            target: 'es6',
            ignoreCompilerErrors: true
        }, 'src'),
    ],
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};
