import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isLoading: false,
  name: null,
  isShowingModal: true,
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.CLOSE_MODAL:
        return update(state, {
          isShowingModal: {
            $set: false,
          },
        });
      case types.LOAD_DATA_INITIATION:
        return update(state, {
          isShowingModal: {
            $set: false,
          },
          isLoading: {
            $set: true,
          },
          name: {
            $set: action.name,
          },
        });
      case types.LOAD_DATA_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
        });
      default:
        return state;
    }
  };

export default landingReducer;
