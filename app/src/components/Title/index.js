import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Title = ({ content }) => (
  <h1 className={styles.title}>
    {content}
  </h1>
);

Title.propTypes = {
  content: PropTypes.string.isRequired,
};

export default cssModules(Title, styles);
