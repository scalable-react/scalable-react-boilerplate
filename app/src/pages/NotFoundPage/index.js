import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const NotFound = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Not Found</h1>
  </div>
);

export default cssModules(NotFound, styles);
