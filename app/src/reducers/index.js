import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

// Import the various reducers here:

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  routing: routerReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
