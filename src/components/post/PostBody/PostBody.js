import React, { Component } from 'react';
import './PostBody.css';

class PostBody extends Component {
    state = { 
        theme: 'snow'
    }

    render () {
        return (
            <div
            className="ql-editor"
            dangerouslySetInnerHTML={{__html: this.props.body}}/>
        );
    }
};

export default PostBody;