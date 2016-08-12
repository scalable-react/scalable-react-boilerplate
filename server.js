require('babel-core/register');

import path from 'path';
import express from 'express';
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const IP = isDeveloping ? '0.0.0.0' : process.env.IP;
const buildPath = path.join(__dirname, 'public/build');

if (isDeveloping) {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },
    stats: {
      colors: true,
    },
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(buildPath));
    res.end();
  });
} else {
  app.use(express.static(buildPath));
}

app.listen(port, IP, (err) => {
  if (err) {
    console.log(`An error occured. How sad 😞.  ${err}`);
  }
  console.info(`⚔⚔ JOY! It worked.  Your app is running at: http://${IP}:${port}. Have a great day!`);
});
