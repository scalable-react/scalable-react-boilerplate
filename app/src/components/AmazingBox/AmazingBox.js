import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './AmazingBox.module.scss';

const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const BoxStyle = {
  colorStyle: {
    color: `${randomColor}`
  }
};

const AmazingBox = ({
  content,
  onRemove,
  i
}) => (
  <div
    className={styles.box}
    style={BoxStyle.colorStyle}
    id={`box-item-${i}`}
  >
    {content}
    <button
      className={styles.btnClose}
      onClick={onRemove}
    >
      ✕
    </button>
  </div>
);

AmazingBox.propTypes = {
  content: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default cssModules(AmazingBox, styles);
