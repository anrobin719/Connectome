import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const changeInput = ({ name, value }) => {
  return {
    type: actionTypes.CHANGE_INPUT,
    name: name,
    value: value
  };
};

export const changeFile = (name, value) => {
  return {
    type: actionTypes.CHANGE_FILE,
    name: name,
    value: value
  };
};

export const initialize = () => {
  return {
    type: actionTypes.INITIALIZE
  };
};

export const writePostStart = () => {
  return {
    type: actionTypes.WRITE_POST_START
  };
};

export const writePostSuccess = postId => {
  return {
    type: actionTypes.WRITE_POST_SUCCESS,
    postId: postId
  };
};

export const writePostFail = err => {
  return {
    type: actionTypes.WRITE_POST_FAIL,
    error: err
  };
};

export const writePost = newPostData => {
  return dispatch => {
    dispatch(writePostStart());
    axios
      .post("/post.json", newPostData)
      .then(res => {
        console.log("WRITE_POST_SUCCESS");
        dispatch(writePostSuccess(res.data.name));
      })
      .catch(err => {
        console.log("WRITE_POST_FAIL");
        dispatch(writePostFail(err));
      });
  };
};

export const editorGetPostStart = () => {
  return {
    type: actionTypes.EDITOR_GET_POST_START
  };
};
export const editorGetPostSuccess = data => {
  return {
    type: actionTypes.EDITOR_GET_POST_SUCCESS,
    postData: data
  };
};
export const editorGetPostFail = () => {
  return {
    type: actionTypes.EDITOR_GET_POST_FAIL
  };
};

export const editorGetPost = id => {
  return dispatch => {
    dispatch(editorGetPostStart());
    axios
      .get(`/post/${id}.json`)
      .then(res => {
        console.log("EDITOR_GET_POST_SUCCESS");
        dispatch(editorGetPostSuccess(res.data));
      })
      .catch(err => {
        console.log("EDITOR_GET_POST_FAIL", err);
        dispatch(editorGetPostFail());
      });
  };
};

export const editPostStart = () => {
  return {
    type: actionTypes.EDIT_POST_START
  };
};

export const editPostSuccess = id => {
  return {
    type: actionTypes.EDIT_POST_SUCCESS,
    postId: id
  };
};

export const editPostFail = () => {
  return {
    type: actionTypes.EDIT_POST_FAIL
  };
};

export const editPost = (id, postData) => {
  return dispatch => {
    dispatch(editPostStart());
    axios
      .put(`/post/${id}.json`, postData)
      .then(res => {
        console.log("EDIT_POST_SUCCESS");
        dispatch(editPostSuccess(id));
      })
      .catch(err => {
        console.log("EDIT_POST_FAIL", err);
        dispatch(editPostFail());
      });
  };
};
