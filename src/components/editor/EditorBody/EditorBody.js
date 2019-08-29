import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import './EditorBody.css';

class EditorBody extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      editorHtml: '',
      theme: 'snow'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = html => {
    // this.setState({ editorHtml: html });
    this.props.htmlChangedHandler({name: 'body', value: html});
  }
  
  render () {
    return (
      <div className="EditorBody">
        <ReactQuill 
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.props.body}
          modules={EditorBody.modules}
          formats={EditorBody.formats}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

EditorBody.modules = {
  toolbar: [
    [{'font': []}],
    [{'size': []}],
    [{'color': []}, {'background': []}],
    ['bold', 'italic', 'underline', 'strike'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
      {'indent': '-1'}, {'indent': '+1'},
      {'align': []}
    ],
    ['link', 'image']
  ]
}

EditorBody.formats = [
  'header', 'font', 'size', 'color', 'background',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent', 'align',
  'link', 'image'
]

export default EditorBody;
