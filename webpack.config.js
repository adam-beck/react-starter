const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: ["@babel/polyfill", "react-hot-loader/patch", "./src/index.tsx"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    hot: true,
    host: "0.0.0.0",
    port: 8080,
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://locahost:3000"
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./template.html"),
      inject: "body"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true
          }
        }
      }
    ]
  }
};
