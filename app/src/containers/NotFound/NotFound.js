import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Not Found</h1>
  </div>
);

export default CSSModules(NotFound, styles);
