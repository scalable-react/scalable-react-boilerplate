import {
  LOAD_DATA_INITIATION,
  LOAD_DATA_SUCCESS,
  CLOSE_MODAL,
  OPEN_MODAL,
} from './constants';

// loadDataInitiation :: None -> {Action}
export const loadDataInitiation = (name) => ({
  type: LOAD_DATA_INITIATION,
  name,
});

// loadDataSuccess :: JSON -> {Action}
export const loadDataSuccess = () => ({
  type: LOAD_DATA_SUCCESS,
});

// closeModal :: None -> {Action}
export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const fakeSubmission = (name) => (dispatch) => {
  dispatch(
    loadDataInitiation(name)
  );
  setTimeout(() => {
    dispatch(
      loadDataSuccess()
    );
  }, 4000);
};
