import React from 'react';
import Wrapper from './styles';

export default function QuestionItem(props) {
  return (
    <Wrapper>
      <div
        className={props.correct ? 'option-marker true' : 'option-marker false'}
      />
      <div className="option-text">defdef</div>
    </Wrapper>
  );
}
