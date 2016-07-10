import React, { PropTypes } from 'react';
import { Button } from 'react-foundation';

const AmazingInput = ({
  onSubmit
}) => (
  <div className="form-group">
    <input type="text" placeholder="Add content to create a new box" />
    <Button onClick={onSubmit}>Add Box</Button>
  </div>
);

AmazingInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AmazingInput;