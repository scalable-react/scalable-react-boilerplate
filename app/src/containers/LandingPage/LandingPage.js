import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.scss';

const LandingPage = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Hello from landing page</h1>
  </div>
);

export default CSSModules(LandingPage, styles);
