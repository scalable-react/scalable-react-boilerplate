import * as types from '../../constants/amazingComponent';

const amazingComponent = (state = {
  errors: [],
  messages:[]
}, action) => {
  switch (action.type) {
    case types.AMAZING_COMPONENT_ERROR:
      return Object.assign({}, state, {
        errors: [...state.errors, action.error]
      });
    case types.AMAZING_COMPONENT_MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, action.message]
      });
    case types.CLEAR_AMAZING_COMPONENT_ERROR:
      return Object.assign({}, state, {
        errors: []
      });
    case types.CLEAR_AMAZING_COMPONENT_MESSAGE:
      return Object.assign({}, state, {
        messages: []
      });
    default:
      return state;
  }
}

export default amazingComponent;
