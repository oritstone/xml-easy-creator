import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/editorActions';


export class EditorContainer extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    schemaModel: PropTypes.object.isRequired
  };

  componentDidMount() {
    if (this.props.actions) {
      this.props.actions.fetchXmlSchemaModel();
    }
  }
  render() {
    return (
      "hi"
    );
  }
}

function mapStateToProps(state) {
  return {
    schemaModel: state.schemaModel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorContainer);
