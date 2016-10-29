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
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import Anchor from 'grommet-udacity/components/Anchor';
import Columns from 'grommet-udacity/components/Columns';
import {
  LoadingIndicator,
  Divider,
  WelcomeModal,
  Contributor,
} from 'components';
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
      contributors,
      links,
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
              <Heading align="center">
                {name && `Welcome ${name}!`}
              </Heading>
              <Heading tag="h4" align="center">
                This boilerplate was made as a tool for use in Udacity Alumni projects.
              </Heading>
              <Heading tag="h4" align="center">
                Since making it, is has been used in dozens of projects.
              </Heading>
              <Heading tag="h4" align="center">
                Some of these are listed below
              </Heading>
              <Box align="center" pad="medium">
                <List>
                  {links.map((link, i) =>
                    <ListItem key={i}>
                      <Anchor href={link.url}>
                        {link.name}
                      </Anchor>
                    </ListItem>
                  )}
                </List>
              </Box>
            </Section>
            <Section align="center" justify="center">
              <Headline align="center">
                Who's Behind all This?
              </Headline>
              <Divider />
              <Columns
                maxCount={2}
                justify="center"
                masonry
              >
                {contributors.map((person, i) =>
                  <Contributor key={i} person={person} />
                )}
              </Columns>
            </Section>
            <Footer pad="large" align="center" jusify="center" direction="column">
              <Heading align="center" tag="h2">
                Have any questions?
              </Heading>
              <Box align="center" justify="center" pad="medium">
                <Button label="Get in Touch" href="mailto:admin@ryancollins.io" />
              </Box>
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
  contributors: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isLoading: state.landing.isLoading,
  name: state.landing.name,
  isShowingModal: state.landing.isShowingModal,
  contributors: state.landing.contributors,
  links: state.landing.links,
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
