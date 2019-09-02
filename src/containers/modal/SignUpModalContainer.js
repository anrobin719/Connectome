import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpModal from '../../components/modal/SignUpModal/SignUpModal';
import * as actions from '../../store/actions/index';

class SignUpModalContainer extends Component {
    cancelHandler = () => {
        this.props.onCancel('signUp');
    }

    signUpHandler = (signUpData) => {
        this.props.onSignUp(signUpData);
    }

    render() {
        const { show, loading, error } = this.props;
        return (
            <SignUpModal
                show={show}
                loading={loading}
                error={error}
                cancelHandler={this.cancelHandler}
                signUpHandler={this.signUpHandler}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.base.getIn(['modal', 'signUp']),
        loading: state.auth.loading,
        error: state.auth.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCancel: (modalName) => dispatch(actions.hideModal(modalName)),
        onSignUp: (signUpData) => dispatch(actions.auth(signUpData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModalContainer);