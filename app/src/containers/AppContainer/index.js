import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from 'grommet/components/App';
import { AppContainer as ReactHotLoader } from 'react-hot-loader';
import { Navbar, AppFooter } from 'components';
import * as AppContainerActionCreators from './actions';

class AppContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      location,
    } = this.props;
    return (
      <ReactHotLoader>
        <App centered={false} inline>
          <Navbar pathname={location.pathname} />
          {React.cloneElement(this.props.children, this.props)}
          <AppFooter />
        </App>
      </ReactHotLoader>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = state => ({
  isMobile: state.app.isMobile, // example / unused
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    AppContainerActionCreators,
    dispatch,
  ),
});

const Container = AppContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
