import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Heading from 'grommet-udacity/components/Heading';
import Columns from 'grommet-udacity/components/Columns';
import {
  LoadingIndicator,
  Divider,
  WelcomeModal,
  Contributor,
} from 'components';
import { Maybe } from 'functional-components';
import { reduxForm } from 'redux-form';
import * as LandingActionCreators from './actions';
import styles from './index.module.scss';

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
      contributors,
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
        <Maybe predicate={isLoading}>
          <Section
            align="center"
            justify="center"
            className="full-height"
          >
            <LoadingIndicator isLoading />
          </Section>
        </Maybe>
        <Maybe predicate={!isLoading}>
          <Box>
            <Hero
              justify="center"
              align="center"
              colorIndex="grey-1"
              backgroundImage="https://github.com/RyanCCollins/cdn/blob/master/misc/gradient.jpg?raw=true"
            >
              <Box align="center" justify="center" style={{ width: '100%' }} colorIndex="grey-1-a">
                <img
                  alt="udacity alumni"
                  className="img-responsive"
                  style={{ width: '300px' }}
                  src="https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/udacity-alumni-png.png?raw=true"
                />
                <Headline align="center" size="small">
                  Scaling the Front End Feature First!
                </Headline>
              </Box>
            </Hero>
            <Section align="center" justify="center">
              {name ?
                <Headline align="center">
                  {name && `Welcome ${name}!`}
                </Headline>
              :
                <Button
                  label="Click me for a greeting"
                  onClick={actions.openModal}
                />
              }
              <Divider />
              <Heading align="center" tag="h2">
                Thanks so much for using this boilerplate!
              </Heading>
              <Heading align="center" tag="h2">
                We worked super hard to make this a useful starter project
              </Heading>
              <Footer pad="large" align="center" jusify="center" direction="column">
                <Heading align="center" tag="h2">
                  Ready to get started?
                </Heading>
                <Box align="center" justify="center" pad="medium">
                  <Button label="Go to About Page" href="/about" />
                </Box>
              </Footer>
            </Section>
            <Section align="center" justify="center">
              <Headline align="center">
                {'Who\'s Behind all This?'}
              </Headline>
              <Divider />
              <Columns
                maxCount={2}
                justify="center"
                masonry
              >
                {contributors.map((person, i) =>
                  <Contributor key={i} person={person} />,
                )}
              </Columns>
            </Section>
            <Footer pad="large" align="center" jusify="center" direction="column">
              <Heading align="center" tag="h2">
                Have any questions??
              </Heading>
              <Box align="center" justify="center" pad="medium">
                <Button label="Get in Touch" href="mailto:admin@ryancollins.io" />
              </Box>
            </Footer>
          </Box>
        </Maybe>
      </Box>
    );
  }
}

LandingContainer.propTypes = {
  actions: PropTypes.object.isRequired, // eslint-disable-line
  isLoading: PropTypes.bool.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired, // eslint-disable-line
  name: PropTypes.string,
  contributors: PropTypes.array.isRequired, // eslint-disable-line
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = state => ({
  isLoading: state.landing.isLoading,
  name: state.landing.name,
  isShowingModal: state.landing.isShowingModal,
  contributors: state.landing.contributors,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch,
  ),
});

const Container = cssModules(LandingContainer, styles);

const FormContainer = reduxForm({
  form: 'Welcome',
  fields: formFields,
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormContainer);
