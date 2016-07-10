import React, { PropTypes } from 'react';
import { Button } from 'react-foundation';
import cssModules from 'react-css-modules';
import styles from './AmazingInput.module.scss';

const AmazingInput = ({
  onSubmit,
  contentInput
}) => (
  <div className={styles.formGroup}>
    <input
      {...contentInput}
      className={styles.input}
      value={contentInput.value}
      type="text"
      placeholder="Add content to create a new box"
    />
    <Button
      size='large'
      className={styles.button}
      onClick={onSubmit}
    >
      Add Box
    </Button>
  </div>
);

AmazingInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contentInput: PropTypes.object.isRequired
};

export default cssModules(AmazingInput, styles);