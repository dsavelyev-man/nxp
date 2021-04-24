const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    entry: ["babel-polyfill", path.resolve(__dirname, "./resources/js/app.js")],
    output: {
      path: path.join(__dirname, "/public/assets"),
      filename: "index.js"
    },
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      hot: true,
      contentBase: path.resolve(__dirname, "/public/assets"),
      compress: true,
      port: 3000,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_odules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s(a|c)ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: "assets/other/"
            }
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "./index.css"
      }),
      new webpack.HotModuleReplacementPlugin(),
    ]
  }
}