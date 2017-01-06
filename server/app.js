/* eslint-disable */
import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import store from '../app/src/store';
import { routes } from '../app/src/routes';
import Html from './utils/Html';
import manifest from './public/manifest.json';

const app = express();

// Need to set this to your api url
const IP = process.env.IP || '0.0.0.0';
const PORT = process.env.PORT || 1337;

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  match({ routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        console.error('ROUTER ERROR:', error); // eslint-disable-line no-console
        res.status(500);
      } else if (renderProps) {
        const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
        const component = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        const content = renderToString(component);
        const html = (
          <Html
            content={content}
            scriptHash={manifest["/main.js"]}
            vendorHash={manifest["/vendor.js"]}
            cssHash={manifest["/main.css"]}
            styles={styles}
            state={store.getState()}
          />
        );
        res.status(200).send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
      } else {
        res.status(404).send('Not found');
      }
    });
});

app.listen(PORT, IP, (err) => {
  if (err) {
    return console.warn(err);
  }
  return console.info(`==> 😎 Listening on port ${PORT}. Open http://${IP}:${PORT} in your browser.`);
});
/* eslint-enable */
