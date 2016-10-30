import React from 'react';
import Box from 'grommet-udacity/components/Box';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Article from 'grommet-udacity/components/Article';
import Heading from 'grommet-udacity/components/Heading';
import Markdown from 'grommet-udacity/components/Markdown';
import readme from './_readme.md';

const About = () => (
  <Box>
    <Article>
      <Heading>
        Scalable React Boilerplate
      </Heading>
      <Paragraph>
        This project was created to give the Udacity Alumni development team an
        incredibly optimized and easy to use React starter project.
      </Paragraph>
      <Markdown content={readme} />
    </Article>
  </Box>
);

export default About;
