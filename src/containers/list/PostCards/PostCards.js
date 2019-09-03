import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import PostCard from '../../../components/list/PostCard/PostCard';
import Loading from '../../../components/UI/Loading/Loading';
import classes from './PostCards.scss';

class PostCards extends Component {

    componentDidMount() {
        const { search, onGetPostList, onSetPostList, posts } = this.props;
        !search && onGetPostList()
        // search ? onSetPostList(search, posts) : onGetPostList();
    }

    render() {
        const { posts, filteredPosts, loading, search } = this.props;
        
        if(loading) return <Loading />;


        let postCards = posts.map(post => {
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
        
        // 검색어가 있을 때
        if (search) {
            postCards = filteredPosts.map(post => {
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
        }
            
            
        

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
        filteredPosts: state.list.get('filteredPosts'),
        loading: state.list.get('loading')
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetPostList: () => dispatch(actions.getPostList()),
        onSetPostList: (searchValue, postsSize) => dispatch(actions.setPostList(searchValue, postsSize))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCards);