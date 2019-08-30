import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostCard from '../../../components/list/PostCards/PostCard/PostCard';
import * as actions from '../../../store/actions/index';
import classes from './HomePostCards.scss';

class HomePostCards extends Component {
    componentDidMount() {
        this.props.onGetPostList();
    }

    render() {
        const { posts, loading } = this.props;
        const slicePosts = posts.setSize(3);
        if(loading) return null;
        const postCards = slicePosts.map(post => {
            const { id, title, sub, img, publishedDate, tags } = post.toJS();
            return (
                <PostCard
                    key={id}
                    id={id}
                    title={title}
                    sub={sub}
                    img={img}
                    publishedDate={publishedDate}
                    tags={tags}
                />
            );
        });

        return (
            <div className={classes.HomePostCards}>
                {postCards}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        posts: state.list.get('posts'),
        loading: state.list.get('loading')
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetPostList: () => dispatch(actions.getPostList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePostCards);