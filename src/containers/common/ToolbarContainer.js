import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Toolbar from '../../components/common/Toolbar/Toolbar';
import * as actions from '../../store/actions/index';

class ToolbarContainer extends Component {
    submitHandler = searchValue => {
        this.props.history.push(`/list/${searchValue}`);

        let filteredPosts = this.props.posts;
        if (searchValue.length > 0) {
            filteredPosts = filteredPosts.filter(post => {
                return post.toJS().title.match(searchValue);
            });
        }
        this.props.onSetPostList(filteredPosts);
    }

    render() {
        const {onShowModal, onLogout, isAuthenticated} = this.props;
        return (
            <Toolbar
                onShowModal={onShowModal}
                onLogout={onLogout}
                submitHandler={this.submitHandler}
                isAuthenticated={isAuthenticated}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        posts: state.list.get('posts')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: (modalName) => dispatch(actions.showModal(modalName)),
        onLogout: () => dispatch(actions.authLogout()),
        onSetPostList: (filteredPosts) => dispatch(actions.setPostList(filteredPosts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ToolbarContainer));