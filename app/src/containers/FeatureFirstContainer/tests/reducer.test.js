import * as types from '../constants';
import reducer from '../reducer';
import expect from 'expect';

const initialState = {
  isLoading: false,
  data: {
    items: [],
  },
  error: {},
};


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
      fakeData: 'I am some fake data',
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
          type: types.LOAD_DATA_INITIATION,
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
