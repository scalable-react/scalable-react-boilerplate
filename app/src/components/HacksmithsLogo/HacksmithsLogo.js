import React from 'react';
import Hacksmiths from './hacksmiths.png';
import styles from './HacksmithsLogo.module.scss';
import cssModules from 'react-css-modules';

const HacksmithsLogo = () => (
  <div className={styles.container}>
    <img
      src={Hacksmiths}
      style={{ width: 100, height: 100 }}
      alt="Hacksmiths Logo"
    />
  </div>
);

export default cssModules(HacksmithsLogo, styles);
