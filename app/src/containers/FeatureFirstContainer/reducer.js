import {
  LOAD_DATA_INITIATION,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  CLEAR_DATA_ERROR,
} from './constants';

export const initialState = {
  isLoading: false,
  data: {},
  error: {},
};

/**
 * @function featureComponent
 * @description A redux reducer function
 *              Takes state and an action and returns next state.
 * @param {state} - the state tree of the application
 * @param {action} - the dispatched redux action
 */
const featureComponent = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_INITIATION:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case LOAD_DATA_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
      });
    case LOAD_DATA_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    case CLEAR_DATA_ERROR:
      return Object.assign({}, state, {
        error: {},
      });
    default:
      return state;
  }
};

export default featureComponent;
