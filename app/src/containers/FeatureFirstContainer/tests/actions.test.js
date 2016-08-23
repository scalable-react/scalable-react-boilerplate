import expect from 'expect';
import * as actions from '../actions';
import {
  LOAD_DATA_INITIATION,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  CLEAR_DATA_ERROR,
} from '../constants';

describe('FeatureFirstContainer actions', () => {
  it('should dispatch an action to initiate the loading process', () => {
    const expectedAction = {
      type: LOAD_DATA_INITIATION,
    };
    expect(
      actions.loadDataInitiation()
    ).toEqual(expectedAction);
  });
  it('should dispatch an action to successfully finish loading', () => {
    const data = {
      items: [],
    };
    const expectedAction = {
      type: LOAD_DATA_SUCCESS,
      data,
    };
    expect(
      actions.loadDataSuccess(data)
    ).toEqual(expectedAction);
  });
  it('should dispatch an action with an error describing a failure to load data', () => {
    const error = {
      message: 'An error occured',
    };
    const expectedAction = {
      type: LOAD_DATA_FAILURE,
      error,
    };
    expect(
      actions.loadDataFailure(error)
    ).toEqual(expectedAction);
  });
  it('should dispatch an action to clear the error', () => {
    const expectedAction = {
      type: CLEAR_DATA_ERROR,
    };
    expect(
      actions.clearDataError()
    ).toEqual(expectedAction);
  });
});
