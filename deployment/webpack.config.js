const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const deploymentFolder = "../dist";
const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        contentscript: "./src/contentscript/Contentscript.ts",
        background: "./src/background/Background.ts"
    },
    output: {
        path: path.resolve(__dirname, deploymentFolder),
        filename: "[name].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true
                }
            },
            {
                test: /\.(txt|jsonc)$/,
                use: "raw-loader"
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf|dae|csv)$/,
                use: "file-loader"
            },
            {
                test: /\.css$/,
                use: [isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackNotifierPlugin({ skipFirstNotification: true }),
        new ForkTsCheckerWebpackPlugin(),
        new ForkTsCheckerNotifierWebpackPlugin({ skipSuccessful: true }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyPlugin([{ from: "./manifest.json", to: path.resolve(__dirname, deploymentFolder, "manifest.json") }])
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin()]
    }
};
