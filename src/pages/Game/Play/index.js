import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import { history } from '../../../redux/store';
import { createOneUserAnswerAction } from '../../../redux/user-answer/actions';
import PlayGameContainter from '../../../containers/Game/Play';
import Header from '../Header';
import { PlayGamePageWrapper } from '../styles';

const { Content } = Layout;

export default function PlayGamePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.question);
  const sessionState = useSelector((state) => state.session);
  const roomState = useSelector((state) => state.room);
  const [isNewQuestion, setIsNewQuestion] = useState(false);
  const [indexQuestion, setIndexQuestion] = useState(0);

  useEffect(() => {
    if (data.questions.length === 0) {
      history.push('/join');
    }
  }, []);

  const handleChooseAnswer = (index) => {
    const answer = data.questions[indexQuestion].answers[index];
    dispatch(
      createOneUserAnswerAction({
        sessionId: sessionState.currentSession.id,
        userId: sessionState.currentSession.userId,
        questionId: answer.questionId,
        answerIds: [answer.id],
        roomId: roomState.currentRoom.id,
        score: 10,
        fullName: localStorage.getItem('fullName'),
      }),
    );
    if (indexQuestion < data.total - 1) {
      setIndexQuestion(indexQuestion + 1);
      setIsNewQuestion(true);
    } else {
      history.push('/result');
    }
  };

  const resetTime = () => {
    setIsNewQuestion(false);
  };
  return (
    <PlayGamePageWrapper>
      <Layout className="play-layout">
        <Header
          maxTime={
            data.questions[indexQuestion] && data.questions[indexQuestion].time
          }
          total={data.total}
          index={indexQuestion + 1}
          isNewQuestion={isNewQuestion}
          resetTime={resetTime}
        />
        <Content className="content">
          <PlayGameContainter
            question={data.questions[indexQuestion]}
            handleChooseAnswer={handleChooseAnswer}
          />
        </Content>
      </Layout>
    </PlayGamePageWrapper>
  );
}
