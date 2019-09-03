import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Post from '../../components/post/Post/Post';
import * as actions from '../../store/actions/index';
import Loading from '../../components/UI/Loading/Loading';

class PostContainer extends Component {
    componentDidMount() {
        this.initialize();
    };

    initialize = async () => {
        const { id, onGetPost } = this.props;
        await onGetPost(id);
    };

    removePostHandler = async () => {
        await this.props.onRemovePost(this.props.id);
        this.props.history.push('/list');
    }

    applyHandler = () => {
        const { isAuthenticated, onShow } = this.props;
        if(isAuthenticated) {
            onShow('apply');
        } else {
            onShow('askSignIn');
        }
    }

    render() {
        const { title, sub, myTalent, yourTalent, body, img, publishedDate } = this.props.post.toJS();
        
        if(this.props.loading) return <Loading />;

        return (
            <div>
                <Post
                    id={this.props.id}
                    title={title}
                    sub={sub}
                    myTalent={myTalent}
                    yourTalent={yourTalent}
                    body={body}
                    img={img}
                    publishedDate={publishedDate}
                    removePostHandler={this.removePostHandler}
                    applyHandler={this.applyHandler}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.get('post'),
        loading: state.post.get('loading'),
        error: state.post.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetPost: (id) => dispatch(actions.getPost(id)),
        onRemovePost: (id) => dispatch(actions.removePost(id)),
        onShow: (modalName) => dispatch(actions.showModal(modalName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostContainer));