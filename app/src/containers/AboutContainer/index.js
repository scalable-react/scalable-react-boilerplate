import React, { Component, PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import { Divider, About } from 'components';

class AboutContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Box colorIndex="light-2">
        <Section align="center" justify="center">
          <Headline align="center">
            About the App
          </Headline>
          <Divider />
        </Section>
        <About />
      </Box>
    );
  }
}

AboutContainer.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
};


const Container = AboutContainer;


export default Container;
