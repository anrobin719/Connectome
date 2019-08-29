import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const getPostStart = () => {
    return {
        type: actionTypes.GET_POST_START
    }
}

export const getPostSuccess = ( data ) => {
    return {
        type: actionTypes.GET_POST_SUCCESS,
        postData: data
    }
}

export const getPostFail = () => {
    return {
        type: actionTypes.GET_POST_FAIL
    }
}

export const getPost = ( id ) => {
    return dispatch => {
        dispatch( getPostStart() );
        axios.get(`/post/${id}.json`)
            .then(res => {
                console.log('get post success!', res);
                dispatch( getPostSuccess(res.data) );
            })
            .catch(err => {
                dispatch( getPostFail() );
            });
    }
}