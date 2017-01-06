import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

/* GENERATOR: Import all of your reducers */
import landing from './containers/LandingContainer/reducer';
import app from './containers/AppContainer/reducer';

const rootReducer = combineReducers({
  app,
  /* GENERATOR: Compile all of your reducers */
  landing,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
