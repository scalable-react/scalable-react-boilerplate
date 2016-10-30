/* global System b:true */
import React from 'react';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import store, { history } from './store';
import client from './apolloClient';
import { AppContainer } from 'containers';

// Switching to system.import to make use of dynamic tree shaking
// https://medium.com/modus-create-front-end-development/automatic-code-splitting-for-react-router-w-es6-imports-a0abdaa491e9#.msrxv8fwd
const errorLoading = (err) =>
  console.error('Dynamic loading failed' + err); // eslint-disable-line

const loadRoute = (cb) =>
  (module) =>
    cb(null, module.default);

export const routes = {
  component: AppContainer,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      System.import('./pages/LandingPage')
        .then(loadRoute(callback))
        .catch((err) => errorLoading(err));
    },
  },
  childRoutes: [
    {
      path: '/about',
      getComponent(location, callback) {
        System.import('./pages/AboutPage')
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
/* GENERATOR: Newly generated Routes go here */
    {
      path: '*',
      getComponent(location, callback) {
        System.import('./pages/NotFoundPage')
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
  ],
};

const RouterApp = (props) => (
  <ApolloProvider {...props} store={store} client={client}>
    <Router
      history={history} // Scroll to top on route transitions
      onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
    >
      {routes}
    </Router>
  </ApolloProvider>
);

export default RouterApp;
