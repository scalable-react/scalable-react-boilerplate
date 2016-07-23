import React, { PropTypes, Component } from 'react';
import { Button } from 'react-foundation';
import cssModules from 'react-css-modules';
import styles from './AmazingInput.module.scss';

class AmazingInput extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      value: ''
    };
  }
  handleInput(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit() {
    const {
      onSubmit
    } = this.props;
    const {
      value
    } = this.state;
    onSubmit(value);
  }
  render() {
    const {
      value
    } = this.state;
    return (
      <div className={styles.formGroup}>
        <div className="form-field">
          <label className="form-field__label" htmlFor="input">Box Content</label>
          <span className="form-field__contents">
            <input
              value={value}
              onChange={this.handleInput}
              id="input"
              className={styles.input}
              type="text"
            />
          </span>
        </div>
        <Button
          size={'large'}
          className={styles.button}
          onClick={this.handleSubmit}
        >
          Add Box
        </Button>
      </div>
    );
  }
}

AmazingInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default cssModules(AmazingInput, styles);
