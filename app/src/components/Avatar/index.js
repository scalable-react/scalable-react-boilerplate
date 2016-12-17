import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const defaultAvatarUrl = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png?raw=true';

const Avatar = ({
  src,
}) => (
  <img
    alt="Avatar"
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
