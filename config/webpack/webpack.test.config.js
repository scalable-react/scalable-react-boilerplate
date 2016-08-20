const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const HtmlwebpackPlugin = require('html-webpack-plugin');

const modules = [
  'app/src',
  'node_modules',
];

module.exports = {
  devtool: 'inline-source-map',
  isparta: {
    babel: {
      presets: ['es2015', 'react', 'stage-0'],
    },
  },
  module: {
    noParse: [
      // If libraries complain about babel, put them here.
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'isparta',
        include: path.resolve('app/src'),
      },
    ],
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, loader: 'null-loader' },
      { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
      { test: /\.jpe?g$|\.gif$|\.png$/i, loader: 'null-loader' },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Scalable React Boilerplate',
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  externals: {
    jsdom: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },
  resolve: {
    modulesDirectoris: modules,
    modules,
    alias: {
      sinon: 'sinon/pkg/sinon',
      components: path.resolve(ROOT_PATH, '../../app/src/components'),
      containers: path.resolve(ROOT_PATH, '../../app/src/containers'),
      pages: path.resolve(ROOT_PATH, '../../app/src/pages'),
    },
  },
};
