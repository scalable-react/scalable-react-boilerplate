import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

// Import all of your reducers here:
import featureFirstReducer from 'containers/FeatureFirstContainer/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  featureFirstReducer,
  routing: routerReducer,
  form: formReducer,
  toastr: toastrReducer,
});

export default rootReducer;
