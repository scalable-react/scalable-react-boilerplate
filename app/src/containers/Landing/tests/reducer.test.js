import * as T from '../constants';
import landingReducer, { initialState } from '../reducer';

describe('landingReducer', () => {
  it('should return the initial state', () => {
    expect(
      landingReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for action LOAD_DATA_INITIATION', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      landingReducer(stateBefore, {
        type: T.LOAD_DATA_INITIATION,
      }),
    ).toEqual(stateAfter);
  });
  it('should handle reducer for action LOAD_DATA_SUCCESS', () => {
    const stateBefore = {
      isLoading: true,
    };
    const stateAfter = {
      isLoading: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: T.LOAD_DATA_SUCCESS,
      }),
    ).toEqual(stateAfter);
  });
  it('should handle reducer for action LOAD_DATA_FAILURE', () => {
    const error = new Error('Ooops');
    const stateBefore = {
      isLoading: true,
      error: null,
    };
    const stateAfter = {
      isLoading: false,
      error,
    };
    expect(
      landingReducer(stateBefore, {
        type: T.LOAD_DATA_FAILURE,
        error,
      }),
    ).toEqual(stateAfter);
  });
});
