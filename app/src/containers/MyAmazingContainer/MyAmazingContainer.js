import React, { PropTypes, Component } from 'react';
import { AmazingComponent } from 'components';
import styles from './MyAmazingContainer.module.scss';
import cssModules from 'react-css-modules';
import * as AmazingActionCreators from '../../actions/amazingComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Containers are used for managing state.
// Whenever possible, write components as stateless functional
// components and use classes for stateful containers.
// There is also likely too much state here.  The form
// Input elements can be managed by redux form, for example.
class MyAmazingContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }
  handleAddItem(content) {
    const {
      actions
    } = this.props;
    actions.addBoxItem(content);
  }
  handleRemoveItem(id) {
    const {
      actions
    } = this.props;
    actions.removeBoxItem(id);
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
  actions: PropTypes.object.isRequired
};

// Standard React-Redux Magic to connect your state to local props
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
const mapStateToProps = (state) => ({
  boxes: state.amazingComponent.boxes
});

// More connected component magic
// https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    AmazingActionCreators
  }, dispatch)
});

// CSS Module magic to connect the hashed selectors
// https://github.com/gajus/react-css-modules
const StyledComponent = cssModules(MyAmazingContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledComponent);
