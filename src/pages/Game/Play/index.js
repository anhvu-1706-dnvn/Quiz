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
  const [time, setTime] = useState(0);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [indexChosenAnswer, setIndexChosenAnswer] = useState(0);

  useEffect(() => {
    if (data.questions.length === 0) {
      history.push('/join');
    }
  }, []);

  const handleChooseAnswer = (index) => {
    setIsShowAnswer(true);
    setIndexChosenAnswer(index);
    const answer = data.questions[indexQuestion].answers[index];
    if (!answer.isCorrect) {
      dispatch(
        createOneUserAnswerAction({
          sessionId: sessionState.currentSession.id,
          userId: sessionState.currentSession.userId,
          questionId: answer.questionId,
          answerIds: [answer.id],
          roomId: roomState.currentRoom.id,
          score: 0,
          fullName: localStorage.getItem('fullName'),
        })
      );
    } else {
      const minScore = data.questions[indexQuestion].minimumScore;
      const maxScore = data.questions[indexQuestion].score;
      const score =
        time === 0
          ? 0
          : minScore +
            Math.round(
              (maxScore - minScore) *
                (time / data.questions[indexQuestion].time)
            );

      dispatch(
        createOneUserAnswerAction({
          sessionId: sessionState.currentSession.id,
          userId: sessionState.currentSession.userId,
          questionId: answer.questionId,
          answerIds: [answer.id],
          roomId: roomState.currentRoom.id,
          score,
          fullName: localStorage.getItem('fullName'),
        })
      );
    }

    setTimeout(() => {
      setIsShowAnswer(false);
      if (indexQuestion < data.total - 1) {
        setIndexQuestion(indexQuestion + 1);
        setIsNewQuestion(true);
      } else {
        history.push('/result');
      }
    }, 3000);
  };

  const resetTime = () => {
    setIsNewQuestion(false);
  };

  const handleSetTimeAnswer = (value) => {
    setTime(value);
  };

  const handleSetIndexQuestion = (value) => {
    setIndexQuestion(value);
    setIsNewQuestion(true);
  };

  return isNewQuestion ? (
    <PlayGamePageWrapper>
      <Layout className="play-layout">
        <Header
          total={data.total}
          index={indexQuestion + 1}
          isNewQuestion={isNewQuestion}
          resetTime={resetTime}
          isHideHeaderBar
        />
        <Content className="content-show-index-question">
          {indexQuestion + 1}
        </Content>
      </Layout>
    </PlayGamePageWrapper>
  ) : (
    <PlayGamePageWrapper>
      <Layout className="play-layout">
        <Header
          total={data.total}
          index={indexQuestion + 1}
          isNewQuestion={isNewQuestion}
          handleSetIndexQuestion={handleSetIndexQuestion}
          handleSetTimeAnswer={handleSetTimeAnswer}
          isShowAnswer={isShowAnswer}
          resetTime={resetTime}
        />
        <Content className="content">
          <PlayGameContainter
            question={data.questions[indexQuestion]}
            handleChooseAnswer={handleChooseAnswer}
            isShowAnswer={isShowAnswer}
            indexChosenAnswer={indexChosenAnswer}
          />
        </Content>
      </Layout>
    </PlayGamePageWrapper>
  );
}
