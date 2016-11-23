/* eslint-disable */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.babel.js');
const path = require('path');

const PORT = process.env.PORT || 1337;
const IP = process.env.IP || 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: path.join(__dirname, 'app/build'),
}).listen(PORT, IP, function (err, result) {
  if (err) { return console.log(err); }
  console.log(`Listening at http://${IP}:${PORT}`);
});
