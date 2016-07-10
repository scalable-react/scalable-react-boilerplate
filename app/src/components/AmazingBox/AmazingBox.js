import React from 'react';
import cssModules from 'react-css-modules';
import styles from './AmazingBox.module.scss';

const AmazingBox = ({
  content
}) => (
  <div className={styles.box}>
    {content}
  </div>  
);