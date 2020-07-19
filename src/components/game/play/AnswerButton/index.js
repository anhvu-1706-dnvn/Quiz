import React from 'react';
import Wrapper from './style';

export default function AnswerButton(props) {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>{props.content}</Wrapper>
  );
}
