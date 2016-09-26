import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
/* eslint-enable */

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

export const routes = {
  component: App,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      require.ensure([], () => {
        const LandingPage = require('./pages/LandingPage').default;
        callback(null, LandingPage);
      });
    },
  },
  childRoutes: [
    {
      path: '*',
      getComponent(location, callback) {
        require.ensure([], () => {
          const NotFoundPage = require('./pages/NotFoundPage').default;
          callback(null, NotFoundPage);
        });
      },
    },
  ],
};

const RouterApp = () => (
  <Provider store={store}>
    <Router
      history={history} // Scroll to top on route transitions
      onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
    >
      {routes}
    </Router>
  </Provider>
);

export default RouterApp;
