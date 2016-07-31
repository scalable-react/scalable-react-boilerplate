import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

class HelloWorld extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

HelloWorld.propTypes = {

};

export default cssModules(HelloWorld, styles);
