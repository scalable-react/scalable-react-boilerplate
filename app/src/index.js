import React from 'react';
import { render } from 'react-dom';
import { match } from 'react-router';
import { install } from 'offline-plugin/runtime';
import '../styles/styles.scss';
import { history } from './store';
import RouterApp, { routes } from './routes';

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
  /* eslint-disable */
  if (module.hot) {
    module.hot.accept('./routes', () => {
      const NewRouterApp = require('./routes').default;
      render(<NewRouterApp />, document.getElementById('app'));
    });
  }
  /* eslint-enable */
}
