const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: join(__dirname, "view.js"),
  devtool: "source-map",
  target: "electron-renderer",
  externals: [require("webpack-node-externals")()],
  output: { path: join(__dirname, "dist"), publicPath: "" },
  plugins: [
    new HtmlWebpackPlugin({ template: join(__dirname, "./index.html") })
  ],
  devServer: {
    index: join(__dirname, "index.html"),
    clientLogLevel: "info",
    contentBase: join(__dirname, "dist"),
    port: 9001,
    hot: true
  }
};
