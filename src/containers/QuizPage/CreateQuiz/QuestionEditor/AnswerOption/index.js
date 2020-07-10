import React, { useState } from 'react';
import { Icon, Button } from 'antd';
import Editor from '../../../../../components/common/Editor';
import { Wrapper } from './style';

export default function AnswerOption(props) {
  // const [content, setContent] = useState(props.content);

  // const handleChange = (e) => setContent(e.target.value);

  return (
    <Wrapper>
      <div className="option">
        <div className="option-state">
          <Icon type="check" />
        </div>
        <div className="option-inner">
          <Editor
            placeholder={`Answer option ${props.id}`}
            handleChangeContentAnswer={props.handleChangeContentAnswer}
            content={props.content}
            id={props.id}
          />
        </div>
        <div className="delete-option">
          <Button
            icon="delete"
            disabled={props.disabled}
            onClick={props.handleDeleteAnswer}
          />
        </div>
      </div>
    </Wrapper>
  );
}
