const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
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
                test: /\.(scss|sass)$/,
                use:
                    [
                        // {
                        //     loader: MiniCssExtractPlugin.loader,
                        //     options: {
                        //         hmr: true,
                        //         reloadAll: true
                        //     }
                        //     },
                    {
                      loader: `style-loader`
                    },
                    {
                      loader: `css-loader`
                    },
                    {
                      loader: `sass-loader`
                    }
                ]
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
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]

};