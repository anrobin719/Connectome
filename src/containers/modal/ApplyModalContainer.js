import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ApplyModal from '../../components/modal/ApplyModal/ApplyModal';
import * as actions from '../../store/actions/index';

class ApplyModalContainer extends Component {
    applySubmit = () => {
        const { title } = this.props.post.toJS();
        const { location, onApplyExchange, userId, authorId, userEmail } = this.props;
        let postId = location.pathname.substr(6);
        onApplyExchange(postId, userId, authorId, title, userEmail);

        this.cancelHandler();
    }

    cancelHandler = () => {
        this.props.onCancel('apply');
    }

    render() {
        const { show } = this.props;
        const { title, myTalent, yourTalent } = this.props.post.toJS();
        return (
            <ApplyModal
                show={show}
                title={title}
                myTalent={myTalent}
                yourTalent={yourTalent}
                applySubmit={this.applySubmit}
                cancelHandler={this.cancelHandler}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.get('post'),
        show: state.base.getIn(['modal', 'apply']),
        userId: state.auth.userId,
        userEmail: state.auth.email,
        authorId: state.post.getIn(['post', 'authorId']),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCancel: (modalName) => dispatch(actions.hideModal(modalName)),
        onApplyExchange: (postId, userId, authorId, title, userEmail) => dispatch(actions.applyExchange(postId, userId, authorId, title, userEmail))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ApplyModalContainer));