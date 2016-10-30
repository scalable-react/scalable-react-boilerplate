import React, { PropTypes } from 'react';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import Search from 'grommet-udacity/components/Search';
import LogoImage from './logo.png';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Navbar = ({
  pathname,
}) => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title>
        <img className={styles.logo} src={LogoImage} alt="logo"/>
      </Title>
      <Menu direction="row" align="center" responsive={false}>
        <Anchor href="/" className={pathname === '/' ? 'active' : ''}>
          Home
        </Anchor>
        <Anchor href="/about" className={pathname === '/about' ? 'active' : ''}>
          About
        </Anchor>
        <Search dropAlign={{ right: 'right' }} />
      </Menu>
    </Header>
  </div>
);

Navbar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default cssModules(Navbar, styles);
