const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
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
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    {
      test: /\.jsx?$/,
      loaders: ['eslint-loader'],
      enforce: 'pre',
      include: path.resolve(ROOT_PATH, './app')
    },
    {
      test: /\.md$/,
      use: ['html-loader','markdown-loader']
    },
    {
      test: /\.svg$/,
      use: ['babel-loader','svg-react-loader']
    },
    {
      test: /\.json$/,
      use: 'json-loader'
    },
    {
      test: /\.module\.scss$/,
      loader: 'style-loader!css-loader' +
        '?modules&importLoaders=1&localIdentName=[path]' +
        '___[name]__[local]___[hash:base64:5]' +
        '!resolve-url-loader!postcss-loader!sass-loader'
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
                path.join(ROOT_PATH, 'node_modules')
              ],
              outputStyle: 'compressed'
            }
          }
        ]
      })
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: 'url-loader?mimetype=application/font-woff'
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
      loader: 'file-loader?name=[name].[ext]'
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file-loader?name=[path][name].[hash].[ext]'
    }
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    alias: {
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages'),
      utils: path.resolve(ROOT_PATH, 'app/src/utils')
    },
    modules: [
      path.join(__dirname, 'src'), 'node_modules'
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.HotModuleReplacementPlugin(),
    // new NpmInstallPlugin(),
    new HtmlwebpackPlugin({
      title: 'Scalable React Boilerplate',
      template: 'config/templates/_index.dev.html',
    }),
  ],
};
