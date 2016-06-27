import React, { PropTypes, Component } from 'react';
import { AmazingComponent } from '../../components';
import styles from './MyAmazingContainer.module.scss';

// Containers are used for managing state.
// Whenever possible, write components as stateless functional
// components and use classes for stateful containers.
class MyAmazingContainer extends Component {
  render() {
    return (
      <div className={styles.myAmazingContainer}>
        <h1 className={styles.bigTitle}>I am an Amazing Container</h1>
        <AmazingComponent />
      </div>
    );
  }
}

/*
// Use proptypes for passing props down to your components.
MyAmazingContainer.propTypes = {
  myProp: PropTypes.object.isRequired
};
*/

export default MyAmazingContainer;
