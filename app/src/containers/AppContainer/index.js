import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppContainerActionCreators from './actions';
import App from 'grommet-udacity/components/App';
import { Navbar, AppFooter } from 'components';

class AppContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      location,
    } = this.props;
    return (
      <App centered={false} inline>
        <Navbar pathname={location.pathname} />
        {React.cloneElement(this.props.children, this.props)}
        <AppFooter />
      </App>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AppContainerActionCreators,
    dispatch
  ),
});

const Container = AppContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
