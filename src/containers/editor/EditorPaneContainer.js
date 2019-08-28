import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EditorPane from '../../components/editor/EditorPane/EditorPane';
import * as actions from '../../store/actions/index';

class EditorPaneContainer extends Component {

    changeInput = ({name, value}) => {
        const { onChangeInput } = this.props;
        onChangeInput({name, value});
    }

    changeFile = (name, file) => {
        const { onChangeFile } = this.props;
        onChangeFile(name, file);
    }

    submitPostHandler = (e) => {
        e.preventDefault();
        const { title, sub, myTalent, yourTalent, body, img, onSubmitPost } = this.props;
        const postData = {
            title: title,
            sub: sub,
            myTalent: myTalent,
            yourTalent: yourTalent,
            body: body,
            img: img
        };

        onSubmitPost(postData);
        this.props.history.push(`/post/${this.props.postId}`);
        
    }

    render() {
        const { title, sub, myTalent, yourTalent, body, img } = this.props;
        return (
            <div>
                <EditorPane
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
        postId: state.editor.postId,
        loading: state.editor.loading,
        error: state.editor.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeInput: ({name, value}) => dispatch(actions.changeInput({name, value})),
        onChangeFile: (name, value) => dispatch(actions.changeFile(name, value)),
        onSubmitPost: (postData) => dispatch(actions.writePost(postData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditorPaneContainer));