import expect from 'expect';
import * as types from '../../src/constants/amazingComponent';
import reducer from '../../src/reducers/amazingComponent';

describe('amazingComponent reducer', () => {
  it('should return an object with an empty array under the key boxes (initial state)', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      boxes: []
    });
  });

  it('should add an item to the box array', () => {
    expect(
      reducer(
        {
          boxes: []
        },
        {
          type: types.ADD_BOX,
          content: 'Super awesome content'
        }
      )
    ).toEqual(
      {
        boxes: [
          'Super awesome content'
        ]
      }
    );
  });
  it('should remove the box with the specified index from the box array', () => {
    const stateBefore = {
      boxes: ['Amazing!', 'Awesome!', 'Super Cool!']
    };
    const stateAfter = {
      boxes: ['Amazing!', 'Super Cool!']
    };
    const index = 1;
    expect(
      reducer(stateBefore, {
        type: types.REMOVE_BOX,
        index
      })
    ).toEqual(stateAfter);
  });
});
