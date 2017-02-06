/* @flow */
import React from 'react';
import { Avatar } from 'components';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import styles from './index.module.scss';

function Contributor(props: {
  person: {
    github: string,
    avatar: string,
    name: string,
    bio: string,
  },
}) {
  const { person } = props;
  return (
    <Box
      className={styles.contributor}
      align="center"
      justify="center"
      size="large"
    >
      <Avatar src={person.avatar} />
      <Heading tag="h3" align="center">
        {person.name}
      </Heading>
      <Paragraph>
        {person.bio.slice(0, 300)}
      </Paragraph>
      <Anchor
        icon={<SocialGithubIcon />}
        href={`https://github.com/${person.github}`}
        primary
      >
        {person.github}
      </Anchor>
    </Box>
  );
}

export default cssModules(Contributor, styles);
