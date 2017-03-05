import * as T from './constants';

export const loadDataInitiation = () => ({
  type: T.LOAD_DATA_INITIATION,
});

export const loadDataSuccess = () => ({
  type: T.LOAD_DATA_SUCCESS,
});

export const loadDataFailure = error => ({
  type: T.LOAD_DATA_FAILURE,
  error,
});
