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