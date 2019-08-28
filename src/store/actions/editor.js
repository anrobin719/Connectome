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

export const writePostSuccess = () => {
    return {
        type: actionTypes.WRITE_POST_SUCCESS
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
            console.log('action: success!');
            console.log(res);
            // dispatch( writePostSuccess(res.data) );
        })
        .catch( err => {
            console.log('action: err');
            dispatch( writePostFail(err) );
        });
    };
}