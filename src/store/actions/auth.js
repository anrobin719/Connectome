import dotenv from "dotenv";
import axios from "axios";
import axiosBase from "../../axios-orders";
import * as actionTypes from "./actionTypes";
import * as actions from "../actions/index";

dotenv.config();
const { REACT_APP_FIREBASE_API_KEY } = process.env;

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId, email) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
    email: email
  };
};

export const authFail = errorMessage => {
  return {
    type: actionTypes.AUTH_FAIL,
    errorMessage: errorMessage
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeOut = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export const auth = authForm => {
  return dispatch => {
    dispatch(authStart());
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${REACT_APP_FIREBASE_API_KEY}`;
    if (authForm.isSignUp) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${REACT_APP_FIREBASE_API_KEY}`;
    }
    const authData = {
      email: authForm.email,
      password: authForm.password,
      returnSecureToken: true
    };

    axios
      .post(url, authData)
      .then(res => {
        dispatch(
          authSuccess(res.data.idToken, res.data.localId, res.data.email)
        );
        
        if (authForm.isSignUp) {
          const userId = res.data.localId;
          axiosBase
            .put(`/user/${userId}.json`, authForm)
            .then(res => console.log("Data is saved to user collection"))
            .catch(err => console.log(err));
          dispatch(actions.hideModal("signUp"));
        } else {
          dispatch(actions.hideModal("signIn"));
        }

        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        localStorage.setItem("email", res.data.email);
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(checkAuthTimeOut(res.data.expiresIn));
      })
      .catch(err => {
        console.log(err.response);
        dispatch(authFail(err.response.data.error.message));
      });
  };
};

export const checkAuth = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        const userId = localStorage.getItem("userId");
        const email = localStorage.getItem("email");
        dispatch(authSuccess(token, userId, email));
        dispatch(
          checkAuthTimeOut(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
