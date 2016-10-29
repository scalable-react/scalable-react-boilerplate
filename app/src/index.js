/* eslint-disable */ // React must be in scope here
import React from 'react';
/* eslint-enable */
import { render } from 'react-dom';
import { match } from 'react-router';
import { history } from './store';
import RouterApp, { routes } from './routes';
import { install } from 'offline-plugin/runtime';
import '../styles/styles.scss';

const isProduction = process.env.NODE_ENV === 'production';

match({ history, routes },
  (error, redirectLocation, renderProps) => { // eslint-disable-line
    if (error) {
      return console.error('Require.ensure error'); // eslint-disable-line
    }
    render(<RouterApp {...renderProps} />, document.getElementById('app'));
  });

if (isProduction) {
  install();
} else {
  if (module.hot) {
    module.hot.accept('./routes', () => {
      const NewRouterApp = require('./routes').default;
      render(<NewRouterApp />, document.getElementById('app'));
    });
  }
}
