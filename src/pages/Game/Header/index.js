import React, { useState, useEffect } from 'react';
import { Layout, Button, Icon, Progress } from 'antd';
import Wrapper from './styles';

const { Header } = Layout;

export default function PlayGameHeader(props) {
  const { maxTime } = props;
  const [currentTime, setCurrentTime] = useState(maxTime);

  useEffect(() => {
    if (props.isNewQuestion) {
      setCurrentTime(maxTime);
      console.log('Current Time after reset : ', currentTime);
      
      props.resetTime();
      // clearTimeout();
    }

    if (currentTime <= 0) {
      setCurrentTime(0);
    } else {
      setTimeout(() => {
        const temp = currentTime
        setCurrentTime(temp - 1);
        console.log('Current Time Count down : ', currentTime);
      }, 1000);
    }
  });

  // console.log('max: ' + maxTime);
  // console.log('time: ' + currentTime);

  return (
    <Wrapper>
      <Header className="header">
        <div className="progress-section">
          <Progress
            percent={(currentTime / maxTime) * 100}
            className="countdown-bar"
            showInfo={false}
          />
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
            {/* <div className="infor-wrapper">
              <span>
                Streak:
                <Icon type="fire" theme="filled" className="icon" />3
              </span>
            </div> */}
          </div>
          {/* <div className="right-section">
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
          </div> */}
        </div>
      </Header>
    </Wrapper>
  );
}
