import React, { Component, PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

class ContentRenderer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    /*
    TODO: complete mapping for all styles
          - render inlineStyles
          - render Links
    */
    const blocks = this.props.contentBlocks.map((block) => {
      switch (block.type) {
        case 'unstyled':
          return <p key={block.key}>{block.text}</p>;
        case 'atomic':
          return <p key={block.key}><img src={block.data.src} /></p>;
        case 'blockquote':
          return <blockquote key={block.key}>{block.text}</blockquote>;
        default:
          return <p key={block.key}>{block.text}</p>;
      }
    });

    return (
    <div>
      {blocks}
    </div>
    );
  }
}

ContentRenderer.propTypes = {
  contentBlocks: PropTypes.array.isRequired,
};

export default cssModules(ContentRenderer, styles);
