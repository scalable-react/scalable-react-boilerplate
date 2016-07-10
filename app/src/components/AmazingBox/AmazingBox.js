import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './AmazingBox.module.scss';

const randomColor = Math.floor(Math.random()*16777215).toString(16);
const BoxStyle = {
  colorStyle: {
    color: `#{randomColor}`
  }
}

const AmazingBox = ({
  content
}) => (
  <div
    className={styles.box}
    style={BoxStyle.colorStyle}
  >
    {content}
  </div>
);

AmazingBox.PropTypes = {
  content: PropTypes.string.isRequired
};

export default cssModules(AmazingBox, styles);