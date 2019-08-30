import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const changeInput = ({name, value}) => {
    return {
        type: actionTypes.CHANGE_INPUT,
        name: name,
        value: value
    }
}

export const changeFile = (name, value) => {
    return {
        type: actionTypes.CHANGE_FILE,
        name: name,
        value: value
    }
}

export const initialize = () => {
    return {
        type: actionTypes.INITIALIZE
    }
}

export const writePostStart = () => {
    return {
        type: actionTypes.WRITE_POST_START
    }
}

export const writePostSuccess = ( postId ) => {
    return {
        type: actionTypes.WRITE_POST_SUCCESS,
        postId: postId
    }
}

export const writePostFail = (err) => {
    return {
        type: actionTypes.WRITE_POST_FAIL,
        error: err
    }
}

export const writePost = ( PostData ) => {
    return dispatch => {
        dispatch( writePostStart() );
        axios.post('/post.json', PostData)
        .then( res => {
            console.log('WRITE_POST_SUCCESS');
            dispatch( writePostSuccess(res.data.name) );
        })
        .catch( err => {
            console.log('WRITE_POST_FAIL');
            dispatch( writePostFail(err) );
        });
    };
}