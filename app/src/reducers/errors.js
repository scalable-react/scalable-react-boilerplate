import {
  DISPLAY_ERROR
} from '../actions/actionCreators';

export default function posts(state = {
  myModel: []
}, action) {
  switch (action.type) {
    case DISPLAY_ERROR:
      return Object.assign(state, {
        myModel: [...action.error]
      });
    default:
      return state;
  }
}
