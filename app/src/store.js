import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { UserAuthWrapper as userAuthWrapper } from 'redux-auth-wrapper';
import rootReducer from './reducers';
/* GENERATOR: Import all of your initial state */
import { initialState as landing } from './containers/LandingContainer/reducer';
import { initialState as app } from './containers/AppContainer/reducer';

const initialState = {
  /* GENERATOR: Compile all of your initial state */
  app,
  landing,
};

/* Commonly used middlewares and enhancers */
/* See: http://redux.js.org/docs/advanced/Middleware.html*/
const routingMiddleware = routerMiddleware(browserHistory);
const middlewares = [thunk, routingMiddleware];

const isClient = typeof document !== 'undefined';
const isDeveloping = process.env.NODE_ENV !== 'production';

if (isDeveloping && isClient) {
  const createLogger = require('redux-logger'); // eslint-disable-line
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const enhancers = [];
if (isClient && isDeveloping) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

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
