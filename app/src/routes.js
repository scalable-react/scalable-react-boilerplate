/* global System b:true */
import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { AppContainer } from 'containers'; // eslint-disable-line

/* eslint-disable */
// Polyfill for the System.import
if (typeof System === 'undefined') {
  var System = {
    import(path) {
      return Promise.resolve(require(path));
    },
  };
}
/* eslint-enable */

// Switching to system.import to make use of dynamic tree shaking
// https://medium.com/modus-create-front-end-development/automatic-code-splitting-for-react-router-w-es6-imports-a0abdaa491e9#.msrxv8fwd
const errorLoading = err =>
  console.error('Dynamic loading failed' + err); // eslint-disable-line

const loadRoute = cb =>
  module =>
    cb(null, module.default);

export const routes = {
  component: AppContainer,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      System.import('./pages/LandingPage') // eslint-disable-line block-scoped-var
        .then(loadRoute(callback))
        .catch(err => errorLoading(err));
    },
  },
  childRoutes: [
    {
      path: '/about',
      getComponent(location, callback) {
        System.import('./pages/AboutPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
/* GENERATOR: Newly generated Routes go here */
    {
      path: '*',
      getComponent(location, callback) {
        System.import('./pages/NotFoundPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
  ],
};

const RouterApp = props => (
  <Provider {...props} store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>
);

export default RouterApp;
