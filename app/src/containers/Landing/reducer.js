import * as T from './constants';

export const initialState = {
  isLoading: false,
  error: null,
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case T.LOAD_DATA_INITIATION:
        return {
          ...state,
          isLoading: true,
        };
      case T.LOAD_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };
      case T.LOAD_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };

export default landingReducer;
