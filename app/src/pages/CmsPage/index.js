import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CmsEditor } from 'components';

// Pages map directly to Routes, i.e. one page equals on Route

const CmsPage = () => (
  <div className={styles.container}>
    <CmsEditor />
  </div>
);

export default cssModules(CmsPage, styles);
