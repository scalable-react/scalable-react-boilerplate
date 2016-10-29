import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
const defaultAvatarUrl = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png?raw=true';

const Avatar = ({
  src,
}) => (
  <img
    src={src || defaultAvatarUrl}
    className={styles.avatar}
  />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  src: defaultAvatarUrl,
};

export default cssModules(Avatar, styles);
