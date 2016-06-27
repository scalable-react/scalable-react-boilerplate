import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './AmazingComponent.scss';

const AmazingComponent = () => (
  <div className={`${styles.fullScreen} gradient-green`}>
    <h1 className="section-header">I am truly an amazing component</h1>
    <div className={styles.flex}>
      <div className={styles.box + ' ' + styles.boxOne}>
        <h1 className="centered text-white">I am a box</h1>
      </div>
    </div>
  </div>
);

export default CSSModules(AmazingComponent, styles);
