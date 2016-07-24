import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './AmazingBox.module.scss';

const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const BoxStyle = {
  colorStyle: {
    color: `#${randomColor}`
  }
};

class AmazingBox extends Component {
  constructor() {
    super();
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }
  handleRemoveItem() {
    const {
      onRemove,
      id
    } = this.props;
    onRemove(id);
  }
  render() {
    const {
      id,
      content
    } = this.props;
    return (
      <div
        className={styles.box}
        style={BoxStyle.colorStyle}
        id={`box-item-${id}`}
      >
        <p className={styles.number}>#{id}</p>
        <p className={styles.text}>{content}</p>
        <button
          className={styles.btnClose}
          onClick={this.handleRemoveItem}
        >
          ✕
        </button>
      </div>
    );
  }
}

AmazingBox.propTypes = {
  content: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default cssModules(AmazingBox, styles);
