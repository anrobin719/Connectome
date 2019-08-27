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
  
  handleChange (html) {
    this.setState({ editorHtml: html });
  }

  componentDidUpdate() {
    console.log(this.state.editorHtml);
  }
  
  render () {
    return (
      <div className="EditorBody">
        <ReactQuill 
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
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
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
      {'indent': '-1'}, {'indent': '+1'},
      {'align': []}
    ],
    ['link', 'image']
  ]
}

EditorBody.formats = [
  'header', 'font', 'size', 'color', 'background',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'bullet', 'indent',
  'link', 'image'
]

export default EditorBody;
