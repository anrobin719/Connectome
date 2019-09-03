import React, { Component } from 'react';
import SignInModalContainer from '../modal/SignInModalContainer';
import SignUpModalContainer from '../modal/SignUpModalContainer';
import AskSignInModalContainer from '../modal/AskSignInModalContainer';
import ApplyModalContainer from '../modal/ApplyModalContainer';

class Base extends Component {
    render() {
        return (
            <div>
                <SignInModalContainer />
                <SignUpModalContainer />
                <AskSignInModalContainer />
                <ApplyModalContainer />
            </div>
        );
    }
}

export default Base;