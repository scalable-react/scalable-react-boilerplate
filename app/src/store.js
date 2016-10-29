import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { UserAuthWrapper as userAuthWrapper } from 'redux-auth-wrapper';
import client from './apolloClient';
const isClient = typeof document !== 'undefined';
const isDeveloping = process.env.NODE_ENV !== 'production';

/* Import all of your initial state */
import { initialState as landing } from './containers/LandingContainer/reducer';
import { initialState as app } from './containers/AppContainer/reducer';

const initialState = {
  app,
  /* Compile all of your initial state */
  landing,
};

/* Commonly used middlewares and enhancers */
/* See: http://redux.js.org/docs/advanced/Middleware.html*/
const loggerMiddleware = createLogger();
const routingMiddleware = routerMiddleware(browserHistory);
const middlewares = [thunk, routingMiddleware, client.middleware()];

if (isDeveloping) {
  middlewares.push(loggerMiddleware);
}

/* Everyone should use redux dev tools */
/* https://github.com/gaearon/redux-devtools */
/* https://medium.com/@meagle/understanding-87566abcfb7a */
const enhancers = [];
if (isClient && isDeveloping) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

/* Hopefully by now you understand what a store is and how redux uses them,
 * But if not, take a look at: https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
 * And https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch
 */
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

/* See: https://github.com/reactjs/react-router-redux/issues/305 */
export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

export const userIsAuthenticated = userAuthWrapper({
  authSelector: state => state.app.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/login',
  wrapperDisplayName: 'userIsAuthenticated',
});

export const userIsAdmin = userAuthWrapper({
  authSelector: state => state.app.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/',
  wrapperDisplayName: 'userIsAdmin',
  predicate: user => user.role === 'admin',
});

/* Hot reloading of reducers.  How futuristic!! */
if (module.hot) {
  module.hot.accept('./reducers', () => {
    /*eslint-disable */ // Allow require
    const nextRootReducer = require('./reducers').default;
    /*eslint-enable */
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
