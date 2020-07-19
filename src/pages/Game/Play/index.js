import React from 'react';
import { Layout, Input, Button, Icon } from 'antd';
import PlayGameContainter from '../../../containers/Game/Play';
import { PlayGamePageWrapper } from '../styles';

const { Header, Content } = Layout;

export default function PlayGamePage() {
  return (
    <PlayGamePageWrapper>
      <Layout className="play-layout">
        <Header className="header">
          <div className="left-section">
            <Button className="btn-pause">
              <Icon type="pause" />
            </Button>
            <div className="infor-wrapper">
              <span>8/12</span>
            </div>
            <div className="infor-wrapper">
              <span>
                Streak:
                <Icon type="fire" theme="filled" className="icon" />
                3
              </span>
            </div>
          </div>
          <div className="right-section">
            <div className="infor-wrapper">
              <span>
                <Icon type="golden" theme="filled" className="rank-icon icon" />
                18th
              </span>
            </div>
            <div className="infor-wrapper">
              <span>
                <Icon
                  type="dollar-circle"
                  theme="filled"
                  className="score-icon icon"
                />
                990
              </span>
            </div>
          </div>
        </Header>
        <Content className="content">
          <PlayGameContainter />
        </Content>
      </Layout>
    </PlayGamePageWrapper>
  );
}
