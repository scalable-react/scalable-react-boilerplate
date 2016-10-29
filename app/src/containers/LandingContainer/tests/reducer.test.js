import expect from 'expect';
import * as types from '../constants';
import landingReducer, { initialState } from '../reducer';

describe('landingReducer', () => {
  it('returns the initial state', () => {
    expect(
      landingReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for CLOSE_MODAL', () => {
    const stateBefore = {
      isShowingModal: true,
    };
    const stateAfter = {
      isShowingModal: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.CLOSE_MODAL,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LOAD_DATA_INITIATION', () => {
    const name = 'Ryan Collins';
    const stateBefore = {
      isShowingModal: true,
      name: null,
      isLoading: false,
    };
    const stateAfter = {
      isShowingModal: false,
      name,
      isLoading: true,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.LOAD_DATA_INITIATION,
        name,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LOAD_DATA_SUCCESS', () => {
    const stateBefore = {
      isLoading: true,
    };
    const stateAfter = {
      isLoading: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.LOAD_DATA_SUCCESS,
      })
    ).toEqual(stateAfter);
  });
});
