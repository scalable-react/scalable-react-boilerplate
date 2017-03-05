import React, { Component, PropTypes } from 'react';
import App from 'grommet/components/App';
import { AppContainer as ReactHotLoader } from 'react-hot-loader';

class AppContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ReactHotLoader>
        <App centered={false} inline>
          {React.cloneElement(this.props.children, this.props)}
        </App>
      </ReactHotLoader>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
