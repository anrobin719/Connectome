import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import PostCard from '../../../components/list/PostCard/PostCard';
import classes from './PostCards.scss';

class PostCards extends Component {

    componentDidMount() {
        this.props.onGetPostList();
    }

    render() {
        const { posts, loading } = this.props;
        
        if(loading) return null;

        const postCards = posts.map(post => {
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
            <div className={classes.PostCards}>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostCards);