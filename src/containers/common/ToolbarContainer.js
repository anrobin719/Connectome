import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/common/Toolbar/Toolbar';
import * as actions from '../../store/actions/index';

class ToolbarContainer extends Component {
    render() {
        const {onShowModal, onLogout, isAuthenticated} = this.props;
        return (
            <Toolbar
                onShowModal={onShowModal}
                onLogout={onLogout}
                isAuthenticated={isAuthenticated}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: (modalName) => dispatch(actions.showModal(modalName)),
        onLogout: () => dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarContainer);