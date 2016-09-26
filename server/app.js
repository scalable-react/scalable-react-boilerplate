/* eslint-disable */
import createTemplate from './utils/createTemplate';
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import store from '../app/src/store.js';
import { routes } from '../app/src/routes.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1337 : process.env.PORT;
const app = express();

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  match({ routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const body = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        res.status(200)
          .send(createTemplate(body, store.getState(), mainHash, vendorHash));
      } else {
        res.status(400).send('Not Found 🤔');
      }
    });
});
app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.warn(err);
  }
  return console.info(`==> 😎 Listening on port ${port}. Open http://0.0.0.0:${port}/ in your browser.`);
});
/* eslint-enable */
