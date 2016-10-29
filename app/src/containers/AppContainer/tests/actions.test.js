import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('AppContainer actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.APPCONTAINER_DEFAULT_ACTION,
      };
      expect(actions.appContainerDefaultAction()).toEqual(expected);
    });
  });
});
