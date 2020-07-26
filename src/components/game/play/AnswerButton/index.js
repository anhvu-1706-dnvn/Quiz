import React from 'react';
import Wrapper from './styles';

export default function AnswerButton(props) {
  let backgroundColor = '';
  if (!props.isInCorrect && !props.isCorrect && !props.isChosenInCorrect) {
    switch (props.index) {
      case 1:
        backgroundColor = '#2C9CA6';
        break;
      case 2:
        backgroundColor = '#ECA82C';
        break;
      case 3:
        backgroundColor = '#D4546A';
        break;
      case 4:
        backgroundColor = '#461A42';
        break;
      default:
        backgroundColor = '#2C9CA6';
    }
  } else if (props.isInCorrect) {
    backgroundColor = '#c7c7c7';
  } else if (props.isCorrect) {
    backgroundColor = '#00da12';
  } else if (props.isChosenInCorrect) {
    backgroundColor = '#ff0000';
  }

  return (
    <Wrapper backgroundColor={backgroundColor} onClick={props.onClick}>
      {props.content}
    </Wrapper>
  );
}
