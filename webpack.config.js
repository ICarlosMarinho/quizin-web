const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    open: {
      app: {
        name: "google-chrome",
      },
    },
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "3000",
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/i,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
