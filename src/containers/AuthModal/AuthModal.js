import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import SignIn from '../../components/auth/SignIn/SignIn';
import SignUp from '../../components/auth/SignUp/SignUp';

class AuthModal extends Component {
    state = {
        authModal: false,
        isSignIn: true
    }

    modalCloseHandler = () => {
        this.setState( { authModal: false } );
    }

    render() {
        return (
            <div>
                <Modal show={this.state.authModal} modalClosed={this.modalCloseHandler}>
                    { this.state.isSignIn ? <SignIn /> : <SignUp /> }
                </Modal>
            </div>
        );
    }
}

export default AuthModal;