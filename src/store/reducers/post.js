import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../../shared/utility';

import { Map } from 'immutable';

const initialState = Map({
    post: Map({}),
    loading: false,
    error: false,
})

// const getPostStart = ( state, action ) => {
//     return updateObject(state, {
//         loading: true
//     });
// }

// const getPostSuccess = ( state, action ) => {
//     return updateObject(state, {
//         loading: false,
//         post: action.postData
//     });
// }

// const getPostFail = ( state, action ) => {
//     return updateObject(state, {
//         loading: false,
//         error: true
//     });
// }

const getPostStart = ( state, action ) => {
    const newState = state.set('loading', true);
    return newState;
}

const getPostSuccess = ( state, action ) => {
    const newState = state.set('loading', false).set('post', Map(action.postData));
    return newState;
}

const getPostFail = ( state, action ) => {
    const newState = state.set('loading', false).set('error', true);
    return newState
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.GET_POST_START: return getPostStart(state, action);
        case actionTypes.GET_POST_SUCCESS: return getPostSuccess(state, action);
        case actionTypes.GET_POST_FAIL: return getPostFail(state, action);
        default: return state;
    }
}

export default reducer;