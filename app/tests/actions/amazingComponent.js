import expect from 'expect';
import * as actions from '../../src/actions/actionCreators';
import * as types from '../../src/constants/amazingComponent';

describe('actions', () => {
  it('should create an action to add a box to the boxes list.', () => {
    const content = 'Amazing content!!';
    const expectedAction = {
      type: types.ADD_BOX,
      content
    };
    expect(
      actions.addBox(content)
    ).toEqual(expectedAction);
  });
  it('should create an action to remove a box from the specified index in the boxes list.', () => {
    const index = 1;
    const expectedAction = {
      type: types.REMOVE_BOX,
      index
    };
    expect(
      actions.removeBox(index)
    ).toEqual(expectedAction);
  });
});
