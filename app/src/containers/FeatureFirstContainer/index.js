import React, { PropTypes, Component } from 'react';
/* eslint-disable import/no-unresolved */
import {
  LogoImage,
  Header,
  MegaEditor,
} from 'components';
/* eslint-enable import/no-unresolved */
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MyActions from './actions';

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
      actions,
    } = this.props;
    actions.loadDataInitiation();
  }
  render() {
    const {
      isLoading,
    } = this.props;
    return (
      <div className={styles.container}>
        {isLoading ?
          <h1>LOADING...</h1>
        :
          <div>
            <LogoImage imageSource="https://github.com/RyanCCollins/cdn/raw/master/alumni-webapp/udacity-alumni-small.png?raw=true" />
            <div className={styles.headerText}>
              <Header
                content="Scaling the Front End feature first with the Udacity Alumni Dev Team!"
              />
            </div>
            <div className={styles.editor}>
              <MegaEditor />
            </div>
          </div>
        }
      </div>
    );
  }
}

FeatureFirstContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Action}
const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

// mapDispatchToProps :: Dispatch Func -> {Actions}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(MyActions, dispatch),
});

const StyledContainer = cssModules(FeatureFirstContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledContainer);
