import expect from 'expect';
import landingReducer, { initialState } from '../reducer';

describe('landingReducer', () => {
  it('returns the initial state', () => {
    expect(
      landingReducer(undefined, {})
    ).toEqual(initialState);
  });
});
