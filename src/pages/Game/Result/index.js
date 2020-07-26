import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Layout, Button } from 'antd';
import { history } from '../../../redux/store';
import { socket } from '../../../plugins/socket';
import ResultContainer from '../../../containers/Game/Result';
import { ResultGamePageWrapper } from '../styles';

const { Header, Content } = Layout;

export default function ResultPage() {
  const roomState = useSelector((state) => state.room);
  useEffect(() => {
    socket.on('userLeaveRoom', () => {
      socket.emit('leaveRoom', roomState.currentRoom.id);
    });
  }, []);
  return (
    <ResultGamePageWrapper>
      <Layout className="result-layout">
        <Header className="result-header">
          <Button className="exit-btn" onClick={() => history.push('/join')}>
            X
          </Button>
        </Header>
        <Content className="result-content">
          <ResultContainer />
        </Content>
      </Layout>
    </ResultGamePageWrapper>
  );
}
