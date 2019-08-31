import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/common/Toolbar/Toolbar';
import * as actions from '../../store/actions/index';

class ToolbarContainer extends Component {
    render() {
        return (
            <Toolbar onShowModal={this.props.onShowModal} />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: (modalName) => dispatch(actions.showModal(modalName))
    }
}

export default connect(null, mapDispatchToProps)(ToolbarContainer);