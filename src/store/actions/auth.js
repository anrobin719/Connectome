import * as actionTypes from './actionTypes';
import axios from 'axios';
import axiosBase from '../../axios-orders';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
        email: email
    }
}

export const authFail = (errorMessage) => {
    return {
        type: actionTypes.AUTH_FAIL,
        errorMessage: errorMessage
    }
}

export const auth = ( authForm ) => {
    return dispatch => {
        dispatch( authStart() );
        // 로그인 url
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAuLYNMQ89vowAXVO5RfXwQAzjEFUWIyH4'
        // 회원가입 url
        if(authForm.isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAuLYNMQ89vowAXVO5RfXwQAzjEFUWIyH4';
        }
        const authData = {
            email: authForm.email,
            password: authForm.password,
            returnSecureToken: true
        }

        // 회원가입
        axios.post(url, authData)
            .then(res => {
                console.log(res);
                dispatch(authSuccess(res.data.idToken, res.data.localId, res.data.email));

                // 회원가입시 user컬렉션에 userId를 key값으로 유저정보 저장
                if(authForm.isSignUp) {
                    const userId = res.data.localId;
                    axiosBase.put(`/user/${userId}.json`, authForm)
                        .then(res => console.log('Data is saved to user collection'))
                        .catch(err => console.log(err));
                }

                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('userId', res.data.localId);
                localStorage.setItem('email', res.data.email);
            })
            .catch(err => {
                console.log(err.response);
                dispatch(authFail(err.response.data.error.message))
            });
    }
}