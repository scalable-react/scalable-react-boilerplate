import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
// Example to import a component using ES6 destructuring.
/* eslint-disable*/ // Containers is an alias, so no file is found
import { FeatureFirstContainer } from 'containers';
/* eslint-enable */

// Pages map directly to Routes, i.e. one page equals on Route
// Handler that maps to a route in /utils/routes
const LandingPage = (props) => (
  <div className={styles.container}>
    <FeatureFirstContainer
      {...props}
    />
  </div>
);

export default cssModules(LandingPage, styles);
