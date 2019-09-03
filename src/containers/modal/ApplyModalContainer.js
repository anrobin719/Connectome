import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ApplyModal from '../../components/modal/ApplyModal/ApplyModal';
import * as actions from '../../store/actions/index';

class ApplyModalContainer extends Component {
    applySubmit = () => {
        this.cancelHandler();
        // 신청시 신청완료 확인 문구 삽입 예정
        console.log('apply modal success!');
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
        show: state.base.getIn(['modal', 'apply'])
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCancel: (modalName) => dispatch(actions.hideModal(modalName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ApplyModalContainer));