import React from 'react';
import Wrapper from './styles';

export default function AnswerButton(props) {
  return (
    <Wrapper backgroundColor={props.backgroundColor} onClick={props.onClick}>
      {props.content}
    </Wrapper>
  );
}
