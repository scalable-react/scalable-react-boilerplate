import * as types from '../../constants/amazingComponent';

export const amazingComponentError = (error) => ({
  type: types.AMAZING_COMPONENT_ERROR,
  error
});

export const amazingComponentMessage = (message) => ({
  type: types.AMAZING_COMPONENT_MESSAGE,
  message
});

export const clearAmazingComponentError = () => ({
  type: types.CLEAR_AMAZING_COMPONENT_ERROR
});

export const clearAmazingComponentMessage = () => ({
  type: types.CLEAR_AMAZING_COMPONENT_MESSAGE
});
