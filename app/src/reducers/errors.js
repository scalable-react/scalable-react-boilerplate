import {
  DISPLAY_ERROR
} from '../actions/actionCreators';

export default function posts(state = {
  posts: []
}, action) {
  switch (action.type) {
    case DISPLAY_ERROR:
      return Object.assign(state, {
        posts: [...action.error]
      });
    default:
      return state;
  }
}
