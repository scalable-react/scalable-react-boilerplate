import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const FeatureFirstComponent = () => (
  <div className={styles.container}>
    <div className={styles.logoImageContainer}>
      <img
        src="https://github.com/RyanCCollins/cdn/raw/master/alumni-webapp/udacity-alumni-small.png?raw=true"
        alt="Udacity Alumni"
        className={styles.logoImage}
      />
    </div>
    <h1 className={styles.header}>
      Scaling it Feature First at Udacity Alumni!
    </h1>
  </div>
);

export default cssModules(FeatureFirstComponent, styles);
