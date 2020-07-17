import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import QuillEditorWrapper from './styles';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.isChangeState = false;
    this.state = {
      value: ' ',
      focused: false,
    };

    this.quillModules = {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline'], // toggled buttons
          [{ color: [] }],
          ['code-block'],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ background: [] }], // dropdown with defaults from theme
        ],
      },
    };
  }

  handleChange = (value) => {
    this.isChangeState = true;
    this.setState({ value });
    this.props.handleChangeContentAnswer &&
      this.props.handleChangeContentAnswer(this.props.id, value);
    this.props.handleChangeTitle && this.props.handleChangeTitle(value);
    this.isChangeState = false;
  };

  onFocus = () => {
    this.setState({
      focused: true,
    });
  };

  onBlur = () => {
    this.setState({
      focused: false,
    });
  };

  render() {
    const { label, placeholder, content } = this.props;
    let value;
    if (this.isChangeState) {
      value = this.state.value;
    } else if (content) {
      value = content;
    } else {
      value = '';
    }

    const options = {
      theme: 'snow',
      formats: Editor.formats,
      placeholder,
      value,
      onChange: this.handleChange,
      modules: this.quillModules,
    };

    const isFocus = this.state.focused ? 'focus' : '';
    return (
      <QuillEditorWrapper>
        <label>{label}</label>
        <ReactQuill
          {...options}
          className={isFocus}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </QuillEditorWrapper>
    );
  }
}
