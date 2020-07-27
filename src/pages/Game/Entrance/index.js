import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Button } from 'antd';
import { GridLoader } from 'react-spinners';
import { history } from '../../../redux/store';
import EntranceContainer from '../../../containers/Game/Entrance';

import { EntranceGamePageWrapper } from '../styles';

const { Header, Content } = Layout;

export default function EntrancePage() {
  const totalQuestion = useSelector((state) => state.question.total);
  const roomState = useSelector((state) => state.room);

  const handleClickExitBtn = () => {
    history.goBack();
  };

  useEffect(() => {
    if (localStorage.getItem('role') === 'admin') {
      history.push('/admin');
    }
  });

  return roomState.loadingSetCurrentRoom ? (
    <EntranceGamePageWrapper>
      <div className="loading-container">
        <GridLoader
          size={50}
          color={'#fff'}
          loading={roomState.loadingSetCurrentRoom}
        />
      </div>
    </EntranceGamePageWrapper>
  ) : (
    <EntranceGamePageWrapper>
      <Layout className="entrance-layout">
        <Header className="entrance-header">
          <Button className="exit-btn" onClick={handleClickExitBtn}>
            X
          </Button>
        </Header>
        <Content className="entrance-content">
          {roomState.currentRoom !== null ? (
            <EntranceContainer
              total={totalQuestion}
              handleClickExitBtn={handleClickExitBtn}
            />
          ) : (
            <div className="error-section">
              <div className="content">
                This room is not available. Try again!
              </div>
              <Button className="return-btn" onClick={handleClickExitBtn}>
                Back
              </Button>
            </div>
          )}
        </Content>
      </Layout>
    </EntranceGamePageWrapper>
  );
}
