// spell-checker: ignore devtool
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

const deploymentFolder = "../../build";

module.exports = merge(common, {
    entry: "./src/Index.tsx",
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, deploymentFolder),
        hot: true,
        historyApiFallback: true
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, deploymentFolder),
        publicPath: "/"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
