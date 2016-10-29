import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { AppContainer } from 'containers';
if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

export const routes = {
  component: AppContainer,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      require.ensure([], () => {
        const LandingPage = require('./pages/LandingPage').default;
        callback(null, LandingPage);
      });
    },
  },
  /* Newly generated Routes go here */
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
