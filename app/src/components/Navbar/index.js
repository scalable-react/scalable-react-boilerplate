import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Search from 'grommet/components/Search';
import LogoImage from './logo.png';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Navbar = () => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title>
        <img className={styles.logo} src={LogoImage} alt="logo"/>
      </Title>
      <Menu direction="row" align="center" responsive={false}>
        <Anchor href="#" className="active">
          First
        </Anchor>
        <Anchor href="#">
          Second
        </Anchor>
        <Anchor href="#">
          Third
        </Anchor>
        <Search dropAlign={{ right: 'right' }} />
      </Menu>
    </Header>
  </div>
);

export default cssModules(Navbar, styles);
