import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { LandingContainer } from 'containers';

const LandingPage = () => (
  <div className={styles.container}>
    <LandingContainer />
  </div>
);

export default cssModules(LandingPage, styles);
