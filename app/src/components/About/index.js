// @flow
import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Markdown from 'grommet/components/Markdown';
import Section from 'grommet/components/Section';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Anchor from 'grommet/components/Anchor';
import { Divider } from 'components';
import readme from './_readme.md';

type AboutLink = {
  name: string,
  url: string
};

export default function About(props: {
  links: AboutLink[],
}) {
  const { links } = props;
  return (
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
              {links && links.map((link, i) =>
                <ListItem key={i}>
                  <Anchor href={link.url}>
                    {link.name}
                  </Anchor>
                </ListItem>,
              )}
            </List>
          </Box>
        </Section>
        {typeof readme === 'string' &&
          <Markdown content={readme} />
        }
      </Article>
    </Box>
  );
};