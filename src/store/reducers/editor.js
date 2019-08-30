import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    title: '',
    sub: '',
    myTalent: '',
    yourTalent: '',
    body: '',
    img: '',
    postId: null,

    loading: false,
    error: false
};

const changeInput = ( state, action ) => {
    return updateObject( state, {
        [action.name]: action.value
    });
}

const changeFile = ( state, action ) => {
    return updateObject( state, {
        [action.name]: action.value
    });
}

const writePostStart = ( state, action ) => {
    return updateObject(state, {
        loading: true
    });
}

const writePostSuccess = ( state, action ) => {
    return updateObject(state, {
        loading: false,
        postId: action.postId
    });
}

const writePostFail = ( state, action ) => {
    return updateObject(state, {
        loading: false,
        error: true
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INPUT: return changeInput(state, action);
        case actionTypes.CHANGE_FILE: return changeFile(state, action);
        case actionTypes.WRITE_POST_START: return writePostStart(state, action);
        case actionTypes.WRITE_POST_SUCCESS: return writePostSuccess(state, action);
        case actionTypes.WRITE_POST_FAIL: return writePostFail(state, action);
        default: return state;
    }
};

export default reducer;