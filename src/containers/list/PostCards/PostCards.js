import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import PostCard from '../../../components/list/PostCard/PostCard';
import Loading from '../../../components/UI/Loading/Loading';
import classes from './PostCards.scss';

class PostCards extends Component {

    componentDidMount() {
        this.props.onGetPostList();
    }

    render() {
        const { posts, loading } = this.props;
        
        if(loading) return <Loading />;

        const postCards = posts.map(post => {
            const { id, title, sub, img, myTalent, yourTalent, publishedDate } = post.toJS();
            return (
                <PostCard
                    key={id}
                    id={id}
                    title={title}
                    sub={sub}
                    img={img}
                    publishedDate={publishedDate}
                    myTalent={myTalent}
                    yourTalent={yourTalent}
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