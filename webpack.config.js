const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');

const config = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: __dirname + "/src/index.html"
  })],
  module: {
    rules: [
      { test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', ".js"],
  },
  devServer: {
    port: 5000,
    onAfterSetupMiddleware: function (devServer) {
      devServer.app.post('*', (req, res) => {
        res.redirect(req.originalUrl);
      });
    },
    static: {
      directory: './dist',
    },
  },
};

module.exports = config;
