import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Toolbar from '../../components/common/Toolbar/Toolbar';
import * as actions from '../../store/actions/index';

class ToolbarContainer extends Component {
    submitHandler = searchValue => {
        const { history } = this.props;
        if (searchValue.length !== 0) {
            history.push(`/list/${searchValue}`);
        }
    }

    render() {
        const {onShowModal, onLogout, isAuthenticated} = this.props;
        return (
            <Toolbar
                onShowModal={onShowModal}
                onLogout={onLogout}
                submitHandler={this.submitHandler}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ToolbarContainer));