import React, { Component } from 'react';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import { Divider, About } from 'components'; // eslint-disable-line
import links from './data';

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
        <About links={links} />
      </Box>
    );
  }
}

export default AboutContainer;
