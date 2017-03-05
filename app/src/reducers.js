import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

/* GENERATOR: Import all of your reducers */
import landing from './containers/Landing/reducer';
import app from './containers/AppContainer/reducer';

const rootReducer = combineReducers({
  app,
  /* GENERATOR: Compile all of your reducers */
  landing,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
