import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignInModal from '../../components/modal/SignInModal/SignInModal';
import * as actions from '../../store/actions/index';

class SignInModalContainer extends Component {
    cancelHandler = () => {
        this.props.onCancel('signIn');
    }

    render() {
        const { show } = this.props;
        return (
            <SignInModal show={show} onCancel={this.cancelHandler}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.base.getIn(['modal', 'signIn'])
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCancel: (modalName) => dispatch(actions.hideModal(modalName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInModalContainer);