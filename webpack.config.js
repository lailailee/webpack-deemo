const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { CleanWebpackPlugin }
  = require('clean-webpack-plugin')
const CopyWebpackPlugins = require('copy-webpack-plugin')
const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugins([
      {
        from: path.join(__dirname, 'assets'),
        to: 'assets'
      }
    ])
  ]
}

module.exports = config