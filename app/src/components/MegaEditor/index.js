import React, { Component } from 'react';
import Megadraft, { editorStateFromRaw, editorStateToJSON } from 'megadraft';
import { stateToHTML } from 'draft-js-export-html';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { saveArticle } from '../../helpers/api';

class MegaEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { editorState: editorStateFromRaw(null) };
    this.onChange = ::this.onChange;

    this.logContent = () => {
      const options = {
        blockRenderers: {
          atomic: (block) => {
            const data = block.getData();
            return `<img src="${data._root.entries[0][1]}">`;
          },
        },
      };

      const contentState = this.state.editorState.getCurrentContent();
      const content = editorStateToJSON(this.state.editorState);
      const formattedContent = JSON.parse(content).blocks;
      const html = stateToHTML(contentState, options);

      console.log('%cJSON: \n', 'font-weight: bold', formattedContent);
      console.log('%cHTML: \n', 'font-weight: bold', html);
      
      saveArticle(formattedContent);

      /* Helper function to read block data
      const blockData = contentState.getBlocksAsArray().map(function (block) {
        return block.getData()._root;
      });
      console.log(blockData);
      */

      this.setState({ editorState: editorStateFromRaw(null) });
    };
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  render() {
    return (
      <div className={styles.container}>
        <Megadraft
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder={'Tell a story ...'}
        />
        <button
          className={`button ${styles.button}`}
          onClick={this.logContent}
        >
          Publish
        </button>
      </div>
    );
  }
}

export default cssModules(MegaEditor, styles);
