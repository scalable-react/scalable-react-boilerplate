/* eslint-disable */ // React must be in scope here
import React from 'react';
/* eslint-enable */
import { render } from 'react-dom';
import RouterApp from './routes';
import { history } from './store/store';
import { routes } from './utils/routes';
import { match } from 'react-router';
import '../styles/styles.scss';

match({ history, routes },
  (error, redirectLocation, renderProps) => {
    if (error) {
      return console.error('Require.ensure error'); //eslint-disable-line
    }
    render(<RouterApp {...renderProps} />, document.getElementById('app'));
  });
