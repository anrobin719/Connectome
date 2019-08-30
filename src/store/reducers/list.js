import * as actionTypes from '../actions/actionTypes';
import { Map, List, fromJS } from 'immutable';

const initialState = Map({
    posts: List(),
    loading: true,
    error: false
})

const getPostListStart = ( state, action ) => {
    const newState = state.set('loading', true);
    return newState;
}

const getPostListSuccess = ( state, action ) => {
    const newState = state.set('posts', fromJS(action.data)).set('loading', false);
    return newState;
}

const getPostListFail = ( state, action ) => {
    const newState = state.set('loading', false).set('error', true);
    return newState;
}


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.GET_POST_LIST_START: return getPostListStart(state, action);
        case actionTypes.GET_POST_LIST_SUCCESS: return getPostListSuccess(state, action);
        case actionTypes.GET_POST_LIST_FAIL: return getPostListFail(state, action);
        default: return state;
    }
}

export default reducer;