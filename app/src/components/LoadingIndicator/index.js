// @flow
import React from 'react';
import cssModules from 'react-css-modules';
import Spinning from 'grommet/components/icons/Spinning';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import styles from './index.module.scss';

function LoadingIndicator(props: {
  isLoading: boolean,
  message: ?string
}) {
  const { message, isLoading } = props;
  const title = message || 'Loading';
  return (
    <Box
      align="center"
      justify="center"
      className={styles.loadingIndicator}
    >
      {isLoading &&
        <Box
          align="center"
          justify="center"
        >
          <Spinning />
          <Heading tag="h3" align="center">{title}</Heading>
        </Box>
      }
    </Box>
  );
}

export default cssModules(LoadingIndicator, styles);
