const error = (input) =>
  input.dirty || input.touched && input.error ? input.error : null;

export default error;
