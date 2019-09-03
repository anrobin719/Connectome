import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import PostCard from '../../../components/list/PostCard/PostCard';
import Loading from '../../../components/UI/Loading/Loading';
import classes from './PostCards.scss';

class PostCards extends Component {

    componentDidMount() {
        const { onGetPostList } = this.props;
        onGetPostList()
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
        
        // param이 바뀌고, 필터된 포스트가 있을 때
        if (search && filteredPosts.size !== 0) {
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
            <Fragment>
            { search && filteredPosts.size === 0 ? <div className={classes.searchArr}>검색 결과가 없습니다.</div> : (
                <div className={classes.PostCards}>
                    {postCards}
                </div>
            )}
            </Fragment>
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
        onGetPostList: () => dispatch(actions.getPostList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCards);