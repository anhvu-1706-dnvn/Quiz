import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { PulseLoader } from 'react-spinners';
import theme from '../../configs/theme';
import QuizzList from '../../components/quizz/find_quizz/QuizzList';
import { history } from '../../redux/store';
import { getListTagWithTestAction } from '../../redux/tag/action';
import Wrapper from './styles';
import { tag } from '../../redux/tag/reducer';

const { Search } = Input;

export default function FindQuizz() {
  const dispatch = useDispatch();
  const tagState = useSelector((state) => state.tag);
  useEffect(() => {
    if (localStorage.getItem('role') === 'participant') {
      history.push('/join');
    }
    dispatch(getListTagWithTestAction());
  }, [dispatch]);

  return tagState.loading ? (
    <Wrapper>
      <div className="loading-container">
        <PulseLoader
          color={theme.palette.primary}
          size={30}
          loading={tagState.loading}
        />
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <div className="option-section">
        <div className="main-title">What will you teach today?</div>
        <Search
          placeholder="Search for quizzes on any topic"
          onSearch={(value) => console.log(value)}
          className="search-bar"
        />
      </div>
      {tagState.tags.length > 0 &&
        tagState.tags.map((e) => (
          <QuizzList key={e.id} id={e.id} nameList={e.name} test={e.test} />
        ))}
    </Wrapper>
  );
}
