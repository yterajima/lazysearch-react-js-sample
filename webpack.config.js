const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    lz: path.resolve(__dirname, './src/app.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
  },

  devServer: {
    contentBase: path.resolve(__dirname),
    port: 3000,
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules|\.tmp|vendor/,
      use: { loader: 'babel-loader' }
    },{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    },{
      test: /\.css$/,
      use: [
        { loader: 'style-loader/useable', options: { attrs: { id: 'lz-style' } } },
        { loader: 'css-loader' }
      ]
    }]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
