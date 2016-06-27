import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './AmazingComponent.scss';

const AmazingComponent = () => (
  <div className={styles.container}>
    <div className={styles.amazingComponent}>
      <h1>I am an amazing component</h1>
    </div>
  </div>
);

export default CSSModules(AmazingComponent, styles);
