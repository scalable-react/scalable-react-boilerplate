import React from 'react';
import Box from 'grommet-udacity/components/Box';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Article from 'grommet-udacity/components/Article';
import Heading from 'grommet-udacity/components/Heading';
import Markdown from 'grommet-udacity/components/Markdown';
import Section from 'grommet-udacity/components/Section';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import Anchor from 'grommet-udacity/components/Anchor';
import { Divider } from 'components';
import readme from './_readme.md';

const About = ({
  links,
}) => (
  <Box align="center">
    <Article align="center" className="panel" pad="large">
      <Section align="center" justify="center">
        <Heading>
          Scalable React Boilerplate
        </Heading>
        <Divider />
      </Section>
      <Section align="center" justify="center">
        <Paragraph>
          This project was created to give the Udacity Alumni development team an
          incredibly optimized and easy to use React starter project.  Included
          below is the documentation for the project.
        </Paragraph>
        <Heading tag="h4" align="center">
          Since making this boilerplate, it has been used in dozens of projects.
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
      <Markdown content={readme} />
    </Article>
  </Box>
);

export default About;
