import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import queryString from "query-string";

import EditorPane from "../../components/editor/EditorPane/EditorPane";
import * as actions from "../../store/actions/index";

class EditorPaneContainer extends Component {
  componentDidMount() {
    const { location, onInitialize, onGetPost } = this.props;
    onInitialize();
    const { id } = queryString.parse(location.search);
    if (id) {
      onGetPost(id);
    }
  }

  changeInput = ({ name, value }) => {
    const { onChangeInput } = this.props;
    onChangeInput({ name, value });
  };

  changeFile = (name, file) => {
    const { onChangeFile } = this.props;
    onChangeFile(name, file);
  };

  submitPostHandler = async e => {
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
    } = this.props;
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

  render() {
    const { postId, title, sub, myTalent, yourTalent, body, img } = this.props;
    const { id } = queryString.parse(this.props.location.search);
    return (
      <div>
        {/* 새 포스트 작성시 생성되는 포스트 아이디가 저장되면, 그 위치로 이동 (editor state의 포스트 아이디) */}
        {postId ? <Redirect to={`/post/${postId}`} /> : null}
        <EditorPane
          isEdit={id ? true : false}
          title={title}
          sub={sub}
          myTalent={myTalent}
          yourTalent={yourTalent}
          body={body}
          img={img}
          changeFile={this.changeFile}
          changeInput={this.changeInput}
          submitPost={this.submitPostHandler}
        />
      </div>
    );
  }
}

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
