import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../store/actions/index';
import PostCard from '../../../components/list/PostCard/PostCard';
import Loading from '../../../components/UI/Loading/Loading';
import classes from './PostCards.scss';

class PostCards extends Component {

    componentDidMount() {
        const { search, tag1, tag2, posts, onSetPostListViaTitle, onSetPostListViaTags, onGetPostList } = this.props;
        if (search || tag1) {
            if (search) {
                onSetPostListViaTitle(search, posts);
            } else {
                onSetPostListViaTags(tag1, tag2, posts);
            }
        } else {
            onGetPostList();
        }
    }

    componentDidUpdate(nextProps, nextState) {
        const { location, search, tag1, tag2, posts, onSetPostListViaTitle, onSetPostListViaTags, onGetPostList } = this.props;
        if(location !== nextProps.location) {
            if (search || tag1) {
                if (search) {
                    onSetPostListViaTitle(search, posts);
                } else {
                    onSetPostListViaTags(tag1, tag2, posts);
                }
            } else {
                onGetPostList();
            }
        }
    }

    render() {
        const { posts, filteredPosts, loading, search, tag1, tag2 } = this.props;

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
        if ((search || tag1 || tag2) && filteredPosts.size !== 0) {
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

        if(loading) {
            postCards = <Loading extraClass="fit"/>;   
        }        

        return (
            <Fragment>
            { (search || tag1 || tag2) && filteredPosts.size === 0 ? <div className={classes.searchArr}>검색 결과가 없습니다.</div> : (
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
        onGetPostList: () => dispatch(actions.getPostList()),
        onSetPostListViaTitle: (searchVal, posts) => dispatch(actions.setPostListViaTitle(searchVal, posts)),
        onSetPostListViaTags: (tag1, tag2, posts) => dispatch(actions.setPostListViaTags(tag1, tag2, posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostCards));