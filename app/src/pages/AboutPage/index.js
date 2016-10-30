import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AboutContainer } from 'containers';

const AboutPage = () => (
  <div className={styles.container}>
    <AboutContainer />
  </div>
);

export default cssModules(AboutPage, styles);
