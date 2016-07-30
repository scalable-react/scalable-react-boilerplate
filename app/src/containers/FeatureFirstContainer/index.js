import React, { PropTypes, Component } from 'react';
/* eslint-disable import/no-unresolved */
import { FeatureFirstComponent } from 'components';
/* eslint-enable import/no-unresolved */
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FeatureFirstContainer extends Component {
  constructor(props) {
    super(props);
    this.initiateLoading = this.initiateLoading.bind(this);
  }
  componentDidMount() {
    this.initiateLoading();
  }
  initiateLoading() {
    const {
      actions
    } = this.props;
    actions.loadDataInitiation();
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

FeatureFirstContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

export default cssModules(FeatureFirstComponent, styles);
