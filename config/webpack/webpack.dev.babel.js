const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

module.exports = require('./webpack.base.babel')({
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:1337',
    'webpack/hot/only-dev-server',
    path.resolve(ROOT_PATH, './app/src'),
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        enforce: 'pre',
        include: path.resolve(ROOT_PATH, './app'),
      },
      {
        test: /\.module\.scss$/,
        loader: 'style-loader!css-loader' +
          '?modules&importLoaders=1&localIdentName=[path]' +
          '___[name]__[local]___[hash:base64:5]' +
          '!resolve-url-loader!postcss-loader!sass-loader',
      },
      {
        test: /\.scss$/,
        exclude: [/\.module\.scss$/],
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  path.join(ROOT_PATH, 'node_modules'),
                ],
                outputStyle: 'compressed',
              },
            },
          ],
        }),
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Scalable React Boilerplate',
      template: 'config/templates/_index.dev.html',
    }),
  ],
});
