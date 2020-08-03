import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import queryString from "query-string";

import EditorPane from "../../components/editor/EditorPane/EditorPane";
import * as actions from "../../store/actions/index";

const EditorPaneContainer = props => {
  const { location, onInitialize, onGetPost } = props;
  useEffect(() => {
    onInitialize();
    const { id } = queryString.parse(location.search);
    if (id) {
      onGetPost(id);
    }
  });

  const changeInput = ({ name, value }) => {
    const { onChangeInput } = props;
    onChangeInput({ name, value });
  };

  const changeFile = (name, file) => {
    const { onChangeFile } = props;
    onChangeFile(name, file);
  };

  const submitPostHandler = async e => {
    const {
      location,
      title,
      sub,
      myTalent,
      yourTalent,
      body,
      img,
      publishedDate,
      onSubmitPost,
      onEditPost,
      userId
    } = props;
    const { id } = queryString.parse(location.search);
    e.preventDefault();
    const postData = {
      title: title,
      sub: sub,
      myTalent: myTalent,
      yourTalent: yourTalent,
      body: body,
      img: img,
      publishedDate: publishedDate
    };

    const newPostpublishedDate = new Date();
    const newPostData = {
      ...postData,
      authorId: userId,
      publishedDate: newPostpublishedDate
    };

    try {
      if (id) {
        await onEditPost(id, postData);
        return;
      }
      await onSubmitPost(newPostData);
    } catch (e) {
      console.log(e);
    }
  };

  const { postId, title, sub, myTalent, yourTalent, body, img } = props;
  const { id } = queryString.parse(props.location.search);
  return (
    <div>
      {postId ? <Redirect to={`/post/${postId}`} /> : null}
      <EditorPane
        isEdit={id ? true : false}
        title={title}
        sub={sub}
        myTalent={myTalent}
        yourTalent={yourTalent}
        body={body}
        img={img}
        changeFile={changeFile}
        changeInput={changeInput}
        submitPost={submitPostHandler}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    title: state.editor.title,
    sub: state.editor.sub,
    myTalent: state.editor.myTalent,
    yourTalent: state.editor.yourTalent,
    body: state.editor.body,
    img: state.editor.img,
    publishedDate: state.editor.publishedDate,
    postId: state.editor.postId,
    loading: state.editor.loading,
    error: state.editor.error,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitialize: () => dispatch(actions.initialize()),
    onChangeInput: ({ name, value }) =>
      dispatch(actions.changeInput({ name, value })),
    onChangeFile: (name, value) => dispatch(actions.changeFile(name, value)),
    onGetPost: id => dispatch(actions.editorGetPost(id)),
    onEditPost: (id, postData) => dispatch(actions.editPost(id, postData)),
    onSubmitPost: newPostData => dispatch(actions.writePost(newPostData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditorPaneContainer));
