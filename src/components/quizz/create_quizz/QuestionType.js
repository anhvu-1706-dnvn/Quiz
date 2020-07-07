import React from 'react';
import { Icon } from 'antd';
import { QuestionTypeWrapper } from './styles';

export default function QuestionType(props) {
  return (
    <QuestionTypeWrapper>
      <div className="questionType-icon-wrapper">
        <Icon type={props.iconType} style={{ width: '50px' }} />
      </div>
      <div className="questionType-name">{props.name}</div>
    </QuestionTypeWrapper>
  );
}
