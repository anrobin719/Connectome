import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AskSignInModal from '../../components/modal/AskSignInModal/AskSignInModal';
import * as actions from '../../store/actions/index';

class AskSignInModalContainer extends Component {
    signInSubmit = () => {
        this.cancelHandler();
        this.props.onShow('signIn');
    }
    
    signUpSubmit = () => {
        this.cancelHandler();
        this.props.onShow('signUp');
    }

    cancelHandler = () => {
        this.props.onCancel('askSignIn');
    }

    render() {
        const { show } = this.props;
        return (
            <AskSignInModal
                show={show}
                signInSubmit={this.signInSubmit}
                signUpSubmit={this.signUpSubmit}
                cancelHandler={this.cancelHandler}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.base.getIn(['modal', 'askSignIn'])
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCancel: (modalName) => dispatch(actions.hideModal(modalName)),
        onShow: (modalName) => dispatch(actions.showModal(modalName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AskSignInModalContainer));