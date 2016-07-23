import React, { PropTypes, Component } from 'react';
import { AmazingComponent } from 'components';
import styles from './MyAmazingContainer.module.scss';
import cssModules from 'react-css-modules';
import { addBox, removeBox } from '../../actions/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  handleAddItem(content) {
    const {
      addBoxItem
    } = this.props;
    addBoxItem(content);
  }
  handleRemoveItem(id) {
    const { removeBoxItem } = this.props;
    removeBoxItem(id);
  }
  render() {
    const {
      boxes
    } = this.props;
    return (
      <div className={styles.myAmazingContainer}>
        <h1 className={styles.bigTitle}>React Redux Simple Starter</h1>
        <AmazingComponent
          boxes={boxes}
          onRemoveBox={this.handleRemoveItem}
          onAddBox={this.handleAddItem}
        />
      </div>
    );
  }
}

MyAmazingContainer.propTypes = {
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

const StyledComponent = cssModules(MyAmazingContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledComponent);
