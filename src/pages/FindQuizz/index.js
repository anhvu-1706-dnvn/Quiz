import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import QuizzList from '../../components/quizz/find_quizz/QuizzList';
import { getListTagWithTestAction } from '../../redux/tag/action';
import Wrapper from './styles';

const { Search } = Input;

export default function FindQuizz() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tag);
  useEffect(() => {
    dispatch(getListTagWithTestAction());
  }, [dispatch]);

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
      {data.tags.length > 0 &&
        data.tags.map((e) => (
          <QuizzList key={e.id} id={e.id} nameList={e.name} test={e.test} />
        ))}
    </Wrapper>
  );
}
