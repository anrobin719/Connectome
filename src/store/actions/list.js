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


// export const setPostListStart = () => {
//     return {
//         type: actionTypes.SET_POST_LIST_START
//     }
// }

// export const setPostListSuccess = (data) => {
//     return {
//         type: actionTypes.SET_POST_LIST_SUCCESS,
//         data: data
//     }
// }

// export const setPostListFail = () => {
//     return {
//         type: actionTypes.SET_POST_LIST_FAIL
//     }
// }

// export const setPostList = (searchValue) => {
//     return dispatch => {
//         dispatch( setPostListStart() );
//         axios.get(`/post.json?orderBy="title"&equalTo="${searchValue}"`)
//             .then(res => {
//                 const fetchedPosts = [];
//                 for ( let key in res.data ) {
//                     fetchedPosts.push( {
//                         ...res.data[key],
//                         id: key
//                     } );
//                 }
//                 dispatch( setPostListSuccess(fetchedPosts) );
//                 console.log('SET_POST_LIST_SUCCESS', fetchedPosts);
//             })
//             .catch(err => {
//                 dispatch( setPostListFail() );
//                 console.log('SET_POST_LIST_FAIL', err);
//             });
//     }
// }

export const setPostList = (filteredPosts) => {
    return {
        type: actionTypes.SET_POST_LIST,
        data: filteredPosts
    }
}