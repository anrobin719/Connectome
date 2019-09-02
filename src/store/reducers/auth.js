import * as actionTypes from '../actions/actionTypes';
import { Map } from 'immutable';
import { updateObject } from '../../shared/utility'; 

const initialState = {
    token: null,
    userId: null,
    email: null,
    loading: false,
    error: false
}

const authStart = ( state, action ) => {
    return {
        loading: true,
        error: false
    }
}
const authSuccess = ( state, action ) => {
    return updateObject(state, {
        token: action.token,
        userId: action.userId,
        email: action.email,
        loading: false,
        error: false
    });
    // const newState = state.set('token', action.token).set('userId', action.userId).set('email', action.email).set('loading', false).set('error', false);
    // return newState;
}

const authFail = ( state, action ) => {
    switch (action.errorMessage) {
        case 'EMAIL_EXISTS':
            return updateObject(state, {loading: false, error: '이미 등록된 이메일입니다.'});
        case 'INVALID_EMAIL':
            return updateObject(state, {loading: false, error: '유효하지 않은 이메일입니다.'});
        case 'WEAK_PASSWORD : Password should be at least 6 characters':
            return updateObject(state, {loading: false, error: '패스워드를 6자 이상 입력해주세요.'});
        default:
            return updateObject(state, {loading: false, error: action.errorMessage});
    }
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: return state;
    }
}

export default reducer;