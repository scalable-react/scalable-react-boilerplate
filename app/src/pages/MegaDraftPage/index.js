import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { MegaEditor } from 'components';

// Pages map directly to Routes, i.e. one page equals on Route

const MegaDraftPage = () => (
    <MegaEditor />
);

export default cssModules(MegaDraftPage, styles);
