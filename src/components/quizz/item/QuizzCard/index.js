import React from 'react';
import { useDispatch } from 'react-redux';
import { history } from '../../../../redux/store';
import { getOneTestAction } from '../../../../redux/test/actions';
import { getListQuestionByTestAction } from '../../../../redux/question/actions';
import Wrapper from './styles';

export default function QuizzCard(props) {
  const dispatch = useDispatch();
  const handleClickCard = async () => {
    await dispatch(getOneTestAction(props.id));
    await dispatch(
      getListQuestionByTestAction({
        filter: JSON.stringify({ testId: props.id }),
      })
    );
    history.push('/quiz');
  };
  return (
    <Wrapper onClick={handleClickCard}>
      <div className="card-header">
        <img src={props.imageUrl} alt="quizz-img" className="quizz-img" />
        <div className="card-stat-row">
          <div className="card-stat">10 Qs</div>
          <div className="card-stat">3.7k plays</div>
        </div>
      </div>
      <div className="content-wrapper">{props.name}</div>
    </Wrapper>
  );
}
