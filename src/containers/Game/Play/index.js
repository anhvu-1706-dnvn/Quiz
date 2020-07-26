import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import AnswerButton from '../../../components/game/play/AnswerButton';

import { PlayGameContainerWrapper } from '../styles';

export default function PlayGameContainer(props) {
  return (
    <PlayGameContainerWrapper>
      <div className="title-section">
        {ReactHtmlParser(props.question && props.question.content)}
      </div>
      {props.isShowAnswer ? (
        <div className="answer-section">
          {props.question &&
            props.question.answers.map((e, index) =>
              e.isCorrect ? (
                <AnswerButton
                  content={ReactHtmlParser(e.content)}
                  index={index + 1}
                  onClick={() => props.handleChooseAnswer(index)}
                  key={e.id}
                  isCorrect
                />
              ) : index === props.indexChosenAnswer ? (
                <AnswerButton
                  content={ReactHtmlParser(e.content)}
                  index={index + 1}
                  onClick={() => props.handleChooseAnswer(index)}
                  key={e.id}
                  isChosenInCorrect
                />
              ) : (
                <AnswerButton
                  content={ReactHtmlParser(e.content)}
                  index={index + 1}
                  onClick={() => props.handleChooseAnswer(index)}
                  key={e.id}
                  isInCorrect
                />
              )
            )}
        </div>
      ) : (
        <div className="answer-section">
          {props.question &&
            props.question.answers.map((e, index) => (
              <AnswerButton
                content={ReactHtmlParser(e.content)}
                index={index + 1}
                onClick={() => props.handleChooseAnswer(index)}
                key={e.id}
              />
            ))}
        </div>
      )}
    </PlayGameContainerWrapper>
  );
}
