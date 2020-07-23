import React, { useState, useEffect } from 'react';
import { Layout, Button, Icon, Progress } from 'antd';
import Wrapper from './styles';

const { Header } = Layout;

export default function PlayGameHeader(props) {
  const { time, maxTime } = props;
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    if (props.resetTimeInHeader) {
      setCurrentTime(time);
    } else if (currentTime <= 0) {
        props.setTime(0);
        setCurrentTime(0);
      } else {
        setTimeout(() => {
          props.setTime(currentTime - 1);
          setCurrentTime(currentTime - 1);
        }, 1000);
      }
  });

  return (
    <Wrapper>
      <Header className="header">
        <div className="progress-section">
          {!props.isShowLeaderBoard && (
            <Progress
              percent={(currentTime / maxTime) * 100}
              className="countdown-bar"
              showInfo={false}
            />
          )}
        </div>
        <div className="content">
          <div className="left-section">
            <Button className="btn-pause">
              <Icon type="pause" />
            </Button>
            <div className="infor-wrapper">
              <span>
                {props.index}
                /
                {props.total}
              </span>
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
        </div>
      </Header>
    </Wrapper>
  );
}
