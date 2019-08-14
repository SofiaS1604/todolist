const path = require("path");
const webpack = require("webpack");

const htmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    entry: [
        '@babel/polyfill',
        '@babel/register',
        'webpack-hot-middleware/client',
        "./src/index.jsx",
    ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env",  "@babel/react"] }
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true,
                        reloadAll: true
                    }
                }, {
                    loader: 'css-loader',
                    options: {
                        url: true,
                        modules: true,
                        localIdentName: '[local]___[hash:base64:5]'
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        modules: true,
                        hashPrefix: `web${Date.now()}`
                    }
                }]
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".json", ".sass"],
        alias: {
            actions: path.resolve(__dirname, './src/actions'),
            view: path.resolve(__dirname, './src/view'),
            reducers: path.resolve(__dirname, './src/reducers'),
        }
    },
    output: {
        path: path.resolve(__dirname, "public/"),
        publicPath: "/public/",
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[id].css',
        }),

        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title: "todo list",
            filename: "index.html",
            template: "src/html-templates/index.hbs",
            env: "development",
            hash: true,
            inject: false
        }),
        new htmlWebpackHarddiskPlugin(),
        new webpack.DefinePlugin({
            'process.env':
                {NODE_ENV: JSON.stringify('development')}
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]

};