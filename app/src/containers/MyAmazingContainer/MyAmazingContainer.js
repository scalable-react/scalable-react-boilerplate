import React, { PropTypes, Component } from 'react';
import { AmazingComponent } from 'components';
import styles from './MyAmazingContainer.module.scss';
import cssModules from 'react-css-modules';
import { addBox, removeBox } from '../../actions/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

// Define fields used by redux form
// https://github.com/erikras/redux-form
export const fields = ['contentInput'];

// Containers are used for managing state.
// Whenever possible, write components as stateless functional
// components and use classes for stateful containers.
class MyAmazingContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }
  handleAddItem(e) {
    e.preventDefault();
    const {
      addBoxItem,
      fields: {
        contentInput
      }
    } = this.props;
    const content = contentInput.value;
    addBoxItem(content);
  }
  handleRemoveItem(id) {
    const { removeBoxItem } = this.props;
    removeBoxItem(id);
  }
  render() {
    const {
      boxes,
      fields: {
        contentInput
      }
    } = this.props;
    return (
      <div className={styles.myAmazingContainer}>
        <h1 className={styles.bigTitle}>React Redux Simple Starter</h1>
        <AmazingComponent
          {...contentInput}
          boxes={boxes}
          onRemoveBox={this.handleRemoveItem}
          onAddBox={this.handleAddItem}
        />
      </div>
    );
  }
}

MyAmazingContainer.propTypes = {
  fields: PropTypes.object.isRequired,
  boxes: PropTypes.array.isRequired,
  addBoxItem: PropTypes.func.isRequired,
  removeBoxItem: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  boxes: state.amazingComponent.boxes
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    addBoxItem: (content) => dispatch(addBox(content)),
    removeBoxItem: (index) => dispatch(removeBox(index))
  }, dispatch);

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAmazingContainer);

const StyledComponent = cssModules(ConnectedContainer, styles);

export default reduxForm({
  form: 'boxes',
  fields
})(StyledComponent);
