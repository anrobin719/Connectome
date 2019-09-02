import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignInModal from '../../components/modal/SignInModal/SignInModal';
import * as actions from '../../store/actions/index';

class SignInModalContainer extends Component {
    cancelHandler = () => {
        this.props.onCancel('signIn');
    }

    signInHandler = async (signInData) => {
        this.props.onSignIn(signInData);
    }

    render() {
        const { show, loading, error } = this.props;
        return (
            <SignInModal
                show={show}
                loading={loading}
                error={error}
                cancelHandler={this.cancelHandler}
                signInHandler={this.signInHandler}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.base.getIn(['modal', 'signIn']),
        loading: state.auth.loading,
        error: state.auth.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCancel: (modalName) => dispatch(actions.hideModal(modalName)),
        onSignIn: (signInData) => dispatch(actions.auth(signInData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInModalContainer));