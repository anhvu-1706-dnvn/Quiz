import React from 'react';
import AnswerButton from '../../../components/game/play/AnswerButton';

import { PlayGameContainerWrapper } from '../styles';

export default function PlayGameContainer() {
  return (
    <PlayGameContainerWrapper>
      <div className="title-section">What is your name ?</div>
      <div className="answer-section">
        <AnswerButton content="Peter" backgroundColor="#2C9CA6" />
        <AnswerButton content="Jame" backgroundColor="#ECA82C" />
        <AnswerButton content="David" backgroundColor="#D4546A" />
        <AnswerButton content="Jack" backgroundColor="#461A42" />
      </div>
    </PlayGameContainerWrapper>
  );
}
