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
                console.log('GET_POST_SUCCESS', res);
                dispatch( getPostSuccess(res.data) );
            })
            .catch(err => {
                console.log('GET_POST_FAIL', err);
                dispatch( getPostFail() );
            });
    }
}

export const removePostStart = () => {
    return {
        type: actionTypes.REMOVE_POST_START
    }
}

export const removePostSuccess = () => {
    return {
        type: actionTypes.REMOVE_POST_SUCCESS
    }
}

export const removePostFail = () => {
    return {
        type: actionTypes.REMOVE_POST_FAIL
    }
}

export const removePost = ( id ) => {
    return dispatch => {
        dispatch( removePostStart() );
        axios.delete(`/post/${id}.json`)
            .then(res => {
                console.log('REMOVE_POST_SUCCESS');
                dispatch( removePostSuccess() );
            })
            .catch(err => {
                console.log('REMOVE_POST_FAIL', err);
                dispatch( removePostFail() );
            });
    }
}