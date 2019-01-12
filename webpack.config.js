const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const plugins = [
  new HtmlWebPackPlugin({
    inject: true,
    template: "./src/index.html",
    filename: "./index.html",
    favicon: "./src/favicon.ico",
  })
]

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.js$/,
      use: ["source-map-loader"],
      enforce: "pre"
    },
    {
      test: /\.html$/,
      use: [{
        loader: "html-loader"
      }]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  devtool: isProduction ? "false" : "source-map",
  plugins: plugins
}
