import React, { Component } from 'react';
import Megadraft, { editorStateFromRaw, editorStateToJSON } from 'megadraft';
import { stateToHTML } from 'draft-js-export-html';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

class MegaEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { editorState: editorStateFromRaw(null) };
    this.onChange = ::this.onChange;
    this.logContent = () => {
      let html = stateToHTML(this.state.editorState.getCurrentContent()); // eslint-disable-line
      let content = editorStateToJSON(this.state.editorState); // eslint-disable-line
      console.log('%cJSON: \n', 'font-weight: bold', content);
      console.log('%cHTML: \n', 'font-weight: bold', html);
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
          placeholder={'Tell a story'}
        />
        <button
          className={`button ${styles.button}`}
          onClick={this.logContent}
        >
          log editor content
        </button>
      </div>
    );
  }
}

export default cssModules(MegaEditor, styles);
