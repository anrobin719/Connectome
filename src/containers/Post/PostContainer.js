import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../../components/post/Post/Post';
import * as actions from '../../store/actions/index';

class PostContainer extends Component {
    componentDidMount() {
        this.initialize();
    };

    initialize = async () => {
        const { id, onGetPost } = this.props;
        await onGetPost(id);
    };

    render() {
        const { title, sub, myTalent, yourTalent, body, img } = this.props.post.toJS();
        if(this.props.loading) return null;
        return (
            <div>
                <Post
                    title={title}
                    sub={sub}
                    myTalent={myTalent}
                    yourTalent={yourTalent}
                    body={body}
                    img={img}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.get('post'),
        loading: state.post.get('loading'),
        error: state.post.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetPost: (id) => dispatch(actions.getPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);