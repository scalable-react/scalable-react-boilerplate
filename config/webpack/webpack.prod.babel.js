const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const autoprefixer = require('autoprefixer');
const ManifestPlugin = require('webpack-manifest-plugin');

const ROOT_PATH = path.resolve(__dirname);

module.exports = require('./webpack.base.babel')({
  devtool: 'source-map',
  entry: {
    main: [
      path.resolve(ROOT_PATH, 'app/src/index'),
    ],
    vendor: [
      'react',
      'react-dom',
      'grommet',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-form',
      'reselect',
      'styled-components',
      'redux-auth-wrapper',
      'redux-thunk',
      'functional-components',
    ],
  },
  output: {
    path: path.resolve(ROOT_PATH, 'server/public'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  stats: {
    chunks: true,
  },
  module: {
    rules: [
      {
        test: /\.(sass|sss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('precess'),
                  require('autoprefixer'),
                  autoprefixer({ browsers: [] }),
                ];
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.module\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                fallback: 'style-loader',
                modules: 1,
                importLoaders: 1,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
            'resolve-url-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }),
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
    ],
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: '/',
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],
      },
      safeToUseOptionalCaches: true,
      AppCache: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
    }),
  ],
});
