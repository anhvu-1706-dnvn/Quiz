import React from 'react';
import QuizzItem from '../../components/quizz/item/QuizzItem';
import OptionBar from '../../components/quizz/my_quizz/OptionBar';
import Wrapper from './styles';

export default function MyQuizz() {
  return (
    <Wrapper>
      <OptionBar />
      <div className="quizz-item-wrapper">
        <QuizzItem />
        <QuizzItem />
        <QuizzItem />
        <QuizzItem />
        <QuizzItem />
      </div>
    </Wrapper>
  );
}
