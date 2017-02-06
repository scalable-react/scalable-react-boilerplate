// @flow
import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const defaultAvatarUrl = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png?raw=true';

function Avatar(props: {
  src: ?string,
}) {
  const { src } = props;
  const imageSrc = src || defaultAvatarUrl;
  return (
    <img
      alt="Avatar"
      src={imageSrc}
      className={styles.avatar}
    />
  );
}

export default cssModules(Avatar, styles);
