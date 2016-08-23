import * as types from '../constants';
import reducer from '../reducer';
import expect from 'expect';

const initialState = {
  isLoading: false,
  data: {},
  error: {},
};

// testing reducers is really simple.
// pass the reducer initial state, an action and assert the output.
// Easy as cake, but if you need help
// See here: http://redux.js.org/docs/recipes/WritingTests.html
describe('featureComponent reducer', () => {
  it('should return the initialState', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should initiate loading', () => {
    const stateAfter = {
      isLoading: true,
      data: {},
      error: {},
    };
    expect(
      reducer(initialState, {
        type: types.LOAD_DATA_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should load data successfully', () => {
    const data = {
      items: ['🤓', '😎', '🤔'],
    };
    const stateAfter = {
      isLoading: false,
      data,
      error: {},
    };
    expect(
      reducer(
        initialState,
        {
          type: types.LOAD_DATA_SUCCESS,
          data,
        }
      )
    ).toEqual(stateAfter);
  });
  it('should fail gracefully when the data doesn\'t load', () => {
    const error = {
      message: 'An error occured',
    };
    const stateAfter = {
      isLoading: false,
      data: {},
      error,
    };
    expect(
      reducer(
        initialState,
        {
          type: types.LOAD_DATA_FAILURE,
          error,
        }
      )
    ).toEqual(stateAfter);
  });
  it('should clear the errors', () => {
    const stateBefore = {
      isLoading: false,
      error: { message: 'An error has occured' },
      data: {},
    };
    const stateAfter = {
      isLoading: false,
      error: {},
      data: {},
    };
    expect(
      reducer(
        stateBefore,
        {
          type: types.CLEAR_DATA_ERROR,
        }
      )
    ).toEqual(stateAfter);
  });
});
