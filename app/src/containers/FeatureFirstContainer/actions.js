import {
  LOAD_DATA_INITIATION,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  CLEAR_DATA_ERROR,
} from './constants';

// loadDataInitiation :: None -> {Action}
export const loadDataInitiation = () => ({
  type: LOAD_DATA_INITIATION,
});

// loadDataSuccess :: JSON -> {Action}
export const loadDataSuccess = (data) => ({
  type: LOAD_DATA_SUCCESS,
  data,
});

// loadDataFailure :: JSON -> {Action}
export const loadDataFailure = (error) => ({
  type: LOAD_DATA_FAILURE,
  error,
});

// clearDataError :: None -> {Action}
export const clearDataError = () => ({
  type: CLEAR_DATA_ERROR,
});
