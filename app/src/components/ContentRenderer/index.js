import React, { Component, PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

class ContentRenderer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.contentBlocks);
    const text = this.props.contentBlocks.map((block) => <p>{block.text}</p>);
    return (
      <p>{text}</p>
    );
  }
}

ContentRenderer.propTypes = {
  contentBlocks: PropTypes.array.isRequired,
};

export default cssModules(ContentRenderer, styles);
