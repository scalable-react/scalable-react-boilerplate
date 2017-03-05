import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import { selectIsLoading, selectError } from './selectors';

// eslint-disable-next-line react/prefer-stateless-function
class Landing extends Component {
  render() {
    return (
      <Box>
        Welcome from landing page!
      </Box>
    );
  }
}

Landing.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state),
  errorLoading: selectError(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
