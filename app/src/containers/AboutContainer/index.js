import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import { Divider, About } from 'components';
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
