import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Landing actions', () => {
  it('has a type of LOAD_DATA_INITIATION', () => {
    const name = 'Ryan Collins';
    const expected = {
      type: types.LOAD_DATA_INITIATION,
      name,
    };
    expect(
      actions.loadDataInitiation(name),
    ).toEqual(expected);
  });
  it('has a type of LOAD_DATA_SUCCESS', () => {
    const expected = {
      type: types.LOAD_DATA_SUCCESS,
    };
    expect(
      actions.loadDataSuccess(),
    ).toEqual(expected);
  });
  it('has a type of CLOSE_MODAL', () => {
    const expected = {
      type: types.CLOSE_MODAL,
    };
    expect(
      actions.closeModal(),
    ).toEqual(expected);
  });
});
