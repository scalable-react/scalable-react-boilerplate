import * as types from '../constants/amazingComponent';

const amazingComponent = (state = {
  boxes: ['Amazing', 'Super Amazing', 'Absolutely Amazing', 'Stunningly Amazing', 'Amazingly Amazing']
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
