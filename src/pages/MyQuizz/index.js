import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuizzItem from '../../components/quizz/item/QuizzItem';
import OptionBar from '../../components/quizz/my_quizz/OptionBar';
import { getListTestAction } from '../../redux/test/actions';

import Wrapper from './styles';

export default function MyQuizz() {
  const dispatch = useDispatch();
  const testState = useSelector((state) => state.test);
  const userId = localStorage.getItem('id');

  useEffect(() => {
    dispatch(getListTestAction({ filter: JSON.stringify({ userId }) }));
  }, [dispatch]);

  return (
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
