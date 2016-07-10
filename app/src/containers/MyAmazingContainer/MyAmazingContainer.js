import React, { PropTypes, Component } from 'react';
import { AmazingComponent } from 'components';
import styles from './MyAmazingContainer.module.scss';
import cssModules from 'react-css-modules';
import { addBox, removeBox } from '../../actions/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Containers are used for managing state.
// Whenever possible, write components as stateless functional
// components and use classes for stateful containers.
class MyAmazingContainer extends Component {
  render() {
    const {
      addBoxItem,
      removeBoxItem,
      boxes
    } = this.props;
    return (
      <div className={styles.myAmazingContainer}>
        <h1 className={styles.bigTitle}>I am an Amazing Container</h1>
        <AmazingComponent
          boxes={boxes}
          onRemoveBox={removeBoxItem}
          onAddBox={addBoxItem}
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
  }, dispatch)

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAmazingContainer);

export default cssModules(ConnectedContainer, styles);
