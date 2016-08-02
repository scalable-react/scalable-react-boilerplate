import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const LogoImage = ({
  imageSource,
}) => (
  <div className={styles.logoImageContainer}>
    <img
      src={imageSource}
      alt="Udacity Logo"
      className={styles.logoImage}
      id="udacity-alumni-logo"
    />
  </div>
);

LogoImage.propTypes = {
  imageSource: PropTypes.string.isRequired,
};

export default cssModules(LogoImage, styles);
