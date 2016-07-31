import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const MyComponent = (props) => (
  <div className={styles.myComponent}>
  </div>
);

MyComponent.propTypes = {

};

export default cssModules(MyComponent, styles);
