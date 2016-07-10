import * as types from '../constants/amazingComponent';

export const addBox = (content) => ({
  type: types.ADD_BOX,
  content
});

export const removeBox = (index) => ({
  type: types.REMOVE_BOX,
  index
});