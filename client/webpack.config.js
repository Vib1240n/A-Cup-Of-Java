var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv").config({ path: "./src/.env" });

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      // Additional configuration to handle *.css files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|gif|jpeg|ico)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    }),
    new webpack.DefinePlugin({
      // "process.env.REACT_APP_localDevServerURL": JSON.stringify(
      //   process.env.REACT_APP_localDevServerURL
      // ),
      // "process.env.REACT_APP_prodURL": JSON.stringify(
      //   process.env.REACT_APP_prodURL
      // ),
      // "process.env.REACT_APP_LOCALDEVURL": JSON.stringify(
      //   process.env.REACT_APP_LOCALDEVURL
      // ),
      "process.env": JSON.stringify(dotenv.parsed),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "/api",
    }),
  },
};
