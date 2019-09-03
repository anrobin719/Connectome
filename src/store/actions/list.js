import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const getPostListStart = () => {
    return {
        type: actionTypes.GET_POST_LIST_START
    }
}

export const getPostListSuccess = (data) => {
    return {
        type: actionTypes.GET_POST_LIST_SUCCESS,
        data: data
    }
}

export const getPostListFail = () => {
    return {
        type: actionTypes.GET_POST_LIST_FAIL
    }
}

export const getPostList = () => {
    return dispatch => {
        dispatch( getPostListStart() );
        axios.get('/post.json')
            .then(res => {
                const fetchedPosts = [];
                for ( let key in res.data ) {
                    fetchedPosts.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch( getPostListSuccess(fetchedPosts) );
                console.log('GET_POST_LIST_SUCCESS', fetchedPosts);
            })
            .catch(err => {
                dispatch( getPostListFail() );
                console.log('GET_POST_LIST_FAIL', err);
            });
    }
}

export const setPostListSuccess = (data) => {
    return {
        type: actionTypes.SET_POST_LIST_SUCCESS,
        data: data
    }
}

export const setPostList = (searchValue, posts) => {
    return dispatch => {
        if(posts.size === 0) {
            dispatch( getPostList() );
        } else {
            let filteredPosts = null;
            if (searchValue.length > 0) {
                filteredPosts = posts.filter(post => {
                    return post.toJS().title.match(searchValue);
                });
            }
            dispatch( setPostListSuccess(filteredPosts) );
            console.log('SET_POST_LIST_SUCCESS', filteredPosts);
        }
    }
}