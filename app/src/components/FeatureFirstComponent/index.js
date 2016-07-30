import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const FeatureFirstComponent = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>
      Rocking it Feature First at Udacity Alumni!
    </h1>
  </div>
);

export default cssModules(FeatureFirstComponent, styles);
