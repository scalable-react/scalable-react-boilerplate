import {
  DISPLAY_MESSAGE,
  DISMISS_MESSAGE
} from '../actions/actionCreators';

/* @function posts
 * @description - A sample reducer showing how to display messages for a specific model (key from store)
 * @param - { state } the state of the object, which has a default object set.
 * @param - { action } the action that was dispatched.
 * @return - None
 */
export default function posts(state = {
  alertVisible: false,
  myModel: []
}, action) {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return Object.assign({}, state, {
        alertVisible: true,
        myModel: [...action.messages]
      });
    case DISMISS_MESSAGE:
      return Object.assign({}, state, {
        alertVisible: false,
        myModel: []
      });
    default:
      return state;
  }
}

/* Typically you would repeat this for each of your models and then combine them into one error reducer using
 * Combine reducers.
 */
