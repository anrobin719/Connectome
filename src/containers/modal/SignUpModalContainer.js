import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpModal from '../../components/modal/SignUpModal/SignUpModal';
import * as actions from '../../store/actions/index';

class SignUpModalContainer extends Component {
    cancelHandler = () => {
        this.props.onCancel('signUp');
    }

    render() {
        const { show } = this.props;
        return (
            <SignUpModal show={show} onCancel={this.cancelHandler}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.base.getIn(['modal', 'signUp'])
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCancel: (modalName) => dispatch(actions.hideModal(modalName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModalContainer);