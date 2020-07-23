/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Icon, Button } from 'antd';
import Editor from '../../../../../components/common/Editor';
import { Wrapper } from './style';

export default function AnswerOption(props) {
  // const [content, setContent] = useState(props.content);

  // const handleChange = (e) => setContent(e.target.value);

  const classNameOfOptionState = props.isCorrect
    ? 'option-state  correct'
    : 'option-state';
  return (
    <Wrapper>
      <div className="option">
        <div
          className={classNameOfOptionState}
          onClick={props.handleChangeStatusAnswer}
        >
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
