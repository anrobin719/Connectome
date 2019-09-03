import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import EditorPane from '../../components/editor/EditorPane/EditorPane';
import * as actions from '../../store/actions/index';

class EditorPaneContainer extends Component {
    componentDidMount() {
        const { location, onInitialize, onGetPost } = this.props;
        onInitialize();
        const { id } = queryString.parse(location.search);
        if(id) {
            onGetPost(id);
        }
    }

    changeInput = ({name, value}) => {
        const { onChangeInput } = this.props;
        onChangeInput({name, value});
    }

    changeFile = (name, file) => {
        const { onChangeFile } = this.props;
        onChangeFile(name, file);
    }

    submitPostHandler = async () => {
        const { history, location, title, sub, myTalent, yourTalent, body, img, publishedDate, onSubmitPost, onEditPost, userId } = this.props;
        const { id } = queryString.parse(location.search);
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
            if(id) {
              await onEditPost(id, postData);
              history.push(`/post/${id}`);
              return;
            }
            await onSubmitPost(newPostData);
            history.push(`/post/${this.props.postId}`);
        } catch (e) {
            console.log(e);
        }
        
    }

    render() {
        const { title, sub, myTalent, yourTalent, body, img } = this.props;
        const { id } = queryString.parse(this.props.location.search);
        return (
            <div>
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
        onChangeInput: ({name, value}) => dispatch(actions.changeInput({name, value})),
        onChangeFile: (name, value) => dispatch(actions.changeFile(name, value)),
        onSubmitPost: (newPostData) => dispatch(actions.writePost(newPostData)),
        onGetPost: (id) => dispatch(actions.editorGetPost(id)),
        onEditPost: (id, postData) => dispatch(actions.editPost(id, postData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditorPaneContainer));