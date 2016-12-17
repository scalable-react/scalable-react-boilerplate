import React, { PropTypes } from 'react';
import { Avatar } from 'components';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Anchor from 'grommet-udacity/components/Anchor';
import SocialGithubIcon from 'grommet-udacity/components/icons/base/SocialGithub';
import styles from './index.module.scss';

const Contributor = ({
  person,
}) => (
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
      {`${person.bio.slice(0, 300)}`}
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

Contributor.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }),
};

export default cssModules(Contributor, styles);
