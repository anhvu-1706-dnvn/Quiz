import React from 'react';
import { Input } from 'antd';
import QuizzList from '../../components/quizz/find_quizz/QuizzList';
import Wrapper from './styles';

const { Search } = Input;

export default function FindQuizz() {
  return (
    <Wrapper>
      <div className="option-section">
        <div className="main-title">What will you teach today?</div>
        <Search
          placeholder="Search for quizzes on any topic"
          onSearch={(value) => console.log(value)}
          className="search-bar"
        />
      </div>
      <QuizzList nameList="Mathematics" />
      <QuizzList nameList="English and Language Arts" />
      <QuizzList nameList="Social Studies" />
      <QuizzList nameList="World Languages" />
    </Wrapper>
  );
}
