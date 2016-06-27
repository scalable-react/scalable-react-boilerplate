import {
  DISPLAY_MESSAGE,
  DISMISS_MESSAGE
} from '../actions/actionCreators';

export default function posts(state = {
  alertVisible: false,
  someModel: []
}, action) {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return Object.assign({}, state, {
        alertVisible: true,
        messages: action.messages
      });
    case DISMISS_MESSAGE:
      return Object.assign({}, state, {
        alertVisible: false,
        messages: undefined
      });
    default:
      return state;
  }
}
