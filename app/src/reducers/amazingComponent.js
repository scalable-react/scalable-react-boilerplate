import * as types from '../constants/amazingComponent';

const amazingComponent = (state = {
  boxes: [1, 2, 3, 4, 5]
}, action) => {
  switch (action.type) {
    case types.ADD_BOX:
      return Object.assign({}, state, {
        boxes: [
          ...state.boxes, action.content
        ]
      });
    case types.REMOVE_BOX:
      return Object.assign({}, state, {
        boxes: [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ]
      });
    default:
      return state;
  }
}

export default amazingComponent;
