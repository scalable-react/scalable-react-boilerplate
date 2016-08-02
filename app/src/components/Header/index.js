import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Header = ({
  content,
}) => (
  <h1 className={styles.header}>
    {content}
  </h1>
);

Header.propTypes = {
  content: PropTypes.string.isRequired,
};

export default cssModules(Header, styles);
