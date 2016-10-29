import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Landing actions', () => {
  it('has a type of LANDING_DEFAULT_ACTION', () => {
    const expected = {
      type: types.LANDING_DEFAULT_ACTION,
    };
    expect(actions.landingDefaultAction()).toEqual(expected);
  });
});
