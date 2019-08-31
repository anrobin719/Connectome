import React, { Component } from 'react';
import SignInModalContainer from '../modal/SignInModalContainer';
import SignUpModalContainer from '../modal/SignUpModalContainer';

class Base extends Component {
    // modalCloseHandler = () => {
    //     this.setState( { authModal: false } );
    // }

    render() {
        return (
            <div>
                <SignInModalContainer />
                <SignUpModalContainer />
                {/* <Modal show={this.state.authModal} modalClosed={this.modalCloseHandler}>
                    { this.state.isSignIn ? <SignIn /> : <SignUp /> }
                </Modal> */}
            </div>
        );
    }
}

export default Base;