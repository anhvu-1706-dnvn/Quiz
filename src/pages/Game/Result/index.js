import React from 'react';
import { Layout, Button } from 'antd';
import { history } from '../../../redux/store';
import ResultContainer from '../../../containers/Game/Result';
import { ResultGamePageWrapper } from '../styles';

const { Header, Content } = Layout;

export default function ResultPage() {
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
