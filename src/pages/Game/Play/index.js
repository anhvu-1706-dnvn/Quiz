import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { history } from '../../../redux/store';
import PlayGameContainter from '../../../containers/Game/Play';
import Header from '../Header';
import { PlayGamePageWrapper } from '../styles';

const { Content } = Layout;

export default function PlayGamePage() {
  const data = useSelector((state) => state.question);

  const [isShowLeaderBoard, setIsShowLeaderBoard] = useState(false);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [resetTimeInHeader, setResetTimeInHeader] = useState(false);

  const leaderBoardDelayTime = 5000;

  useEffect(() => {
    if (data.questions.length === 0) {
      history.push('/join');
    } else if (isShowLeaderBoard) {
        setResetTimeInHeader(true);
        setTimeout(() => {
          setIsShowLeaderBoard(false);
          setResetTimeInHeader(false);
          if (indexQuestion < data.total - 1) {
            setIndexQuestion(indexQuestion + 1);
          } else {
            history.push('/result');
          }
        }, leaderBoardDelayTime);
      }
  });

  console.log(data);

  const handleChooseAnswer = (index) => {
    const answer = data.questions[indexQuestion].answers[index];
    if (answer.isCorrect) {
      setIsShowLeaderBoard(true);
    } else {
      setIsShowLeaderBoard(true);
    }
  };

  return (
    <PlayGamePageWrapper>
      <Layout className="play-layout">
        <Header
          isShowLeaderBoard={isShowLeaderBoard}
          time={
            data.questions[indexQuestion] && data.questions[indexQuestion].time
          }
          total={data.total}
          index={indexQuestion + 1}
          resetTimeInHeader={resetTimeInHeader}
        />
        <Content className="content">
          <PlayGameContainter
            question={data.questions[indexQuestion]}
            isShowLeaderBoard={isShowLeaderBoard}
            handleChooseAnswer={handleChooseAnswer}
          />
        </Content>
      </Layout>
    </PlayGamePageWrapper>
  );
}
