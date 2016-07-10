import {
  AMAZING_COMPONENT_ERROR,
} from '../actions/actionCreators';

const amazingComponent = (state = [], action) => {
  switch (action.type) {
    case AMAZING_COMPONENT_ERROR:
      return Object.assign(state, {
        [
          ...state,
          ...action.error
        ]
      });
    default:
      return state;
  }
}

export default amazingComponent;
