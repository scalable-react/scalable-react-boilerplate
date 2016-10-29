import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Heading from 'grommet-udacity/components/Heading';
import { LoadingIndicator, Divider, WelcomeModal } from 'components';
import { reduxForm } from 'redux-form';

export const formFields = [
  'nameInput',
];

class LandingContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const {
      actions,
      fields,
    } = this.props;
    const name = fields.nameInput.value || 'Unknown';
    actions.closeModal();
    actions.fakeSubmission(name);
  }
  render() {
    const {
      isLoading,
      actions,
      isShowingModal,
      name,
      fields: {
        nameInput,
      },
    } = this.props;
    return (
      <Box className={styles.container} colorIndex="light-2">
        <WelcomeModal
          onSubmit={this.handleSubmit}
          nameInput={nameInput}
          onClose={actions.closeModal}
          isVisible={isShowingModal}
        />
        {isLoading ?
          <Section
            align="center"
            justify="center"
            className="full-height"
          >
            <LoadingIndicator isLoading />
          </Section>
        :
          <Box>
            <Hero
              backgroundImage="https://github.com/RyanCCollins/cdn/raw/master/alumni-webapp/scalable-boilerplate-logo.png?raw=true"
            />
            <Section align="center" justify="center">
              <Headline align="center">
                About the App
              </Headline>
              <Divider />
            </Section>
            <Section align="center" justify="center">
              <Heading align="center" justify="center">
                {`Welcome ${name}!`}
              </Heading>
            </Section>
            <Footer>
              <Heading align="center" tag="h2">
                Have any questions?
              </Heading>
              <Button label="Get in Touch" href="mailto:admin@ryancollins.io" />
            </Footer>
          </Box>
        }
      </Box>
    );
  }
}

LandingContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
  name: PropTypes.string,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isLoading: state.landing.isLoading,
  name: state.landing.name,
  isShowingModal: state.landing.isShowingModal,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch
  ),
});

const Container = cssModules(LandingContainer, styles);

const FormContainer = reduxForm({
  form: 'Welcome',
  fields: formFields,
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
