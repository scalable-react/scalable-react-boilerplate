import React from 'react';
import cssModules from 'react-css-modules';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import SocialShare from 'grommet/components/SocialShare';
import Anchor from 'grommet/components/Anchor';
import styles from './index.module.scss';

const AppFooter = () => (
  <Footer pad="large" colorIndex="light-2">
    <Box
      direction="column"
      align="center"
      pad="none"
      responsive
      className={styles.flexOne}
    >
      <Heading tag="h3">
        By{' '}
        <a
          className={styles.footerAnchor}
          href="http://www.ryancollins.io"
        >
          Ryan Collins
        </a>
      </Heading>
      <Heading tag="h5">
        This app is licensed under the{' '}
        <a
          className={styles.footerAnchor}
          href="https://github.com/RyanCCollins/ryancollinsio/blob/master/LICENSE"
        >
          MIT License.
        </a>
        {' '}Take a peak at the{' '}
        <br />
        <Anchor
          className={styles.footerAnchor}
          href="https://github.com/RyanCCollins/ryancollinsio"
        >
          source code.
        </Anchor>
      </Heading>
      <nav
        aria-hidden
        className={
          'grommetux-box grommetux-box--direction-row ' +
          'grommetux-box--responsive grommetux-box--pad-none ' +
          'grommetux-menu grommetux-menu--row grommetux-menu--inline'
        }
      >
        <SocialShare
          a11yTitle="Go to Facebook to Share this website"
          type="facebook"
          link="http://www.ryancollins.io"
          text="RyanCollins.io"
        />
        <SocialShare
          a11yTitle="Go to Twitter to Share this website"
          type="twitter"
          link="http://www.ryancollins.io"
          text="RyanCollins.io"
        />
        <SocialShare
          a11yTitle="Go to Linkedin to Share this website"
          type="linkedin"
          link="http://www.ryancollins.io"
          title="Restaurant Reviewer"
          text="RyanCollins.io"
        />
      </nav>
    </Box>
  </Footer>
);

export default cssModules(AppFooter, styles);
