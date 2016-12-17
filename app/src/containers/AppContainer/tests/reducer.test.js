import expect from 'expect';
import appContainerReducer, { initialState } from '../reducer';

describe('appContainerReducer', () => {
  it('returns the initial state', () => {
    expect(
      appContainerReducer(undefined, {}),
    ).toEqual(initialState);
  });
});
