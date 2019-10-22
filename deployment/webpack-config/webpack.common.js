const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS,
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader?sourceMap"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackNotifierPlugin({ skipFirstNotification: true }),
        new ForkTsCheckerWebpackPlugin(),
        new ForkTsCheckerNotifierWebpackPlugin({ skipSuccessful: true }),
        new HtmlWebpackPlugin({
            title: "Web Application Template",
            template: "index.hbs"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin()]
    }
};
