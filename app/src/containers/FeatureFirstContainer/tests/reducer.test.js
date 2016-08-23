import * as types from '../constants';
import reducer from '../reducer';
import expect from 'expect';

const initialState = {
  isLoading: false,
  data: {},
  error: {},
};

describe('FeatureFirstContainer Reducer', () => {
  it('should return the initialState', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });
});
