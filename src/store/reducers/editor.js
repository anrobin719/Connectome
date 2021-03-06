import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  title: "",
  sub: "",
  myTalent: "",
  yourTalent: "",
  body: "",
  img: "",
  publishedDate: null,
  postId: null,

  loading: false,
  error: false
};

const initialize = (state, action) => {
  return initialState;
};

const changeInput = (state, action) => {
  return updateObject(state, {
    [action.name]: action.value
  });
};

const changeFile = (state, action) => {
  return updateObject(state, {
    [action.name]: action.value
  });
};

const writePostStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const writePostSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    postId: action.postId
  });
};

const writePostFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: true
  });
};

const editPostStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const editPostSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    postId: action.postId
  });
};

const editPostFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: true
  });
};

const editorGetPostStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const editorGetPostSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    title: action.postData.title,
    sub: action.postData.sub,
    myTalent: action.postData.myTalent,
    yourTalent: action.postData.yourTalent,
    body: action.postData.body,
    img: action.postData.img
  });
};

const editorGetPostFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE:
      return initialize(state, action);
    case actionTypes.CHANGE_INPUT:
      return changeInput(state, action);
    case actionTypes.CHANGE_FILE:
      return changeFile(state, action);
    case actionTypes.WRITE_POST_START:
      return writePostStart(state, action);
    case actionTypes.WRITE_POST_SUCCESS:
      return writePostSuccess(state, action);
    case actionTypes.WRITE_POST_FAIL:
      return writePostFail(state, action);
    case actionTypes.EDIT_POST_START:
      return editPostStart(state, action);
    case actionTypes.EDIT_POST_SUCCESS:
      return editPostSuccess(state, action);
    case actionTypes.EDIT_POST_FAIL:
      return editPostFail(state, action);
    case actionTypes.EDITOR_GET_POST_START:
      return editorGetPostStart(state, action);
    case actionTypes.EDITOR_GET_POST_SUCCESS:
      return editorGetPostSuccess(state, action);
    case actionTypes.EDITOR_GET_POST_FAIL:
      return editorGetPostFail(state, action);
    default:
      return state;
  }
};

export default reducer;
