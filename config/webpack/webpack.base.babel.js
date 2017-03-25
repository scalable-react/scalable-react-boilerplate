const path = require('path');

const ROOT_PATH = path.resolve(__dirname);

module.exports = options => ({
  devtool: options.devtool || 'eval',
  entry: options.entry,
  output: options.output,
  stats: options.stats || {},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.md$/,
        use: ['html-loader', 'markdown-loader'],
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'svg-react-loader'],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        loader: 'url-loader?mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader?name=[path][name].[hash].[ext]',
      },
      ...options.module.rules,
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    alias: {
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages'),
      utils: path.resolve(ROOT_PATH, 'app/src/utils'),
    },
    modules: [
      path.join(__dirname, 'src'), 'node_modules',
    ],
  },
  plugins: options.plugins,
});
