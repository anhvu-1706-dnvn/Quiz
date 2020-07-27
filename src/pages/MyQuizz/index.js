import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import theme from '../../configs/theme';
import { history } from '../../redux/store';
import QuizzItem from '../../components/quizz/item/QuizzItem';
import OptionBar from '../../components/quizz/my_quizz/OptionBar';
import { getListTestAction } from '../../redux/test/actions';

import Wrapper from './styles';

export default function MyQuizz() {
  const dispatch = useDispatch();
  const testState = useSelector((state) => state.test);
  const userId = localStorage.getItem('id');

  useEffect(() => {
    if (localStorage.getItem('role') === 'admin') {
      history.push('/admin');
    }
    if (localStorage.getItem('role') === 'participant') {
      history.push('/join');
    }
    dispatch(getListTestAction({ filter: JSON.stringify({ userId }) }));
  }, [dispatch]);

  return testState.loading ? (
    <Wrapper>
      <div className="loading-container">
        <PulseLoader
          color={theme.palette.primary}
          size={30}
          loading={testState.loading}
        />
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <OptionBar total={testState.total} />
      <div className="quizz-item-wrapper">
        {testState &&
          testState.tests.map((e) => (
            <QuizzItem name={e.name} imageUrl={e.image} id={e.id} key={e.id} />
          ))}
      </div>
    </Wrapper>
  );
}
