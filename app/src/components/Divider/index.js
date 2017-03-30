import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const Divider = () => (
  <span className={styles.divider} />
);

export default cssModules(Divider, styles);
