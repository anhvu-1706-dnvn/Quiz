import React, { useState, useEffect } from 'react';
import { Layout, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '../../../plugins/socket';
import { history } from '../../../redux/store';
import { deleteListUserAction } from '../../../redux/room/actions';
import LeaderBoardContainer from '../../../containers/Game/LeaderBoard';
import { LeaderBoardPageWrapper } from '../styles';

const { Content, Header } = Layout;
export default function LeaderBoardPage() {
  const dispatch = useDispatch();
  const questionState = useSelector((state) => state.question);
  const roomState = useSelector((state) => state.room);
  const totalTime = questionState.questions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.time,
    0
  );

  const [currentTime, setCurrentTime] = useState(totalTime);

  useEffect(() => {
    if (roomState.currentRoom === null) {
      history.push('/');
    }
  });

  useEffect(() => {
    if (roomState.currentRoom !== null) {
      if (currentTime === 0) {
        socket.emit('endGame', roomState.currentRoom.id);
        socket.emit('leaveRoom', roomState.currentRoom.id);
        dispatch(deleteListUserAction());
        history.push('/quiz');
      }
      const timer = setInterval(() => setCurrentTime(currentTime - 1), 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [currentTime]);
  return (
    <LeaderBoardPageWrapper>
      <Layout className="leader-board-layout">
        <Header className="leader-board-header">
          <Button className="exit-btn" onClick={() => history.push('/quiz')}>
            X
          </Button>
        </Header>
        <Content className="content">
          <LeaderBoardContainer />
        </Content>
      </Layout>
    </LeaderBoardPageWrapper>
  );
}
