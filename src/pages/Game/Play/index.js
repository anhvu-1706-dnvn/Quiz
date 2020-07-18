import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import PlayGameContainter from '../../../containers/Game/Play';
import { getListQuestionByTestAction } from '../../../redux/question/actions';
import Header from '../Header';
import { PlayGamePageWrapper } from '../styles';

const { Content } = Layout;

export default function PlayGamePage(props) {
  const dispatch = useDispatch();
  const testId = 1;

  const [isShowLeaderBoard, setIsShowLeaderBoard] = useState(false);

  useEffect(() => {
    if (isShowLeaderBoard) {
      setTimeout(() => {
        setIsShowLeaderBoard(false);
      }, 5000);
    }
  });

  const handleChooseAnswer = (id) => {
    if (id === 1) setIsShowLeaderBoard(true);
  };

  return (
    <PlayGamePageWrapper>
      <Layout className="play-layout">
        <Header isShowLeaderBoard={isShowLeaderBoard} />
        <Content className="content">
          <PlayGameContainter
            isShowLeaderBoard={isShowLeaderBoard}
            handleChooseAnswer={handleChooseAnswer}
          />
        </Content>
      </Layout>
    </PlayGamePageWrapper>
  );
}
