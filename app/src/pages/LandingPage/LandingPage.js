import React from 'react';
import cssModules from 'react-css-modules';
import styles from './LandingPage.module.scss';
// Example to import a component using ES6 destructuring.
import { MyAmazingContainer } from '../../containers';

const LandingPage = (props) => (
  <div className={styles.container}>
    <MyAmazingContainer
      {...props}
    />
  </div>
);

export default cssModules(LandingPage, styles);
