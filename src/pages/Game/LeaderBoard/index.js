import React from 'react';
import { Layout, Button } from 'antd';
// import { history } from '../../../redux/store';
import LeaderBoardContainer from '../../../containers/Game/LeaderBoard';
import { LeaderBoardPageWrapper } from '../styles';
const { Content, Header } = Layout;
export default function LeaderBoardPage() {
  return (
    <LeaderBoardPageWrapper>
      <Layout className="leader-board-layout">
        <Header className="leader-board-header">
          <Button className="exit-btn">X</Button>
        </Header>
        <Content className="content">
          <LeaderBoardContainer />
        </Content>
      </Layout>
    </LeaderBoardPageWrapper>
  );
}
