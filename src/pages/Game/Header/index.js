import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Button, Icon, Progress } from 'antd';
import Wrapper from './styles';

const { Header } = Layout;

export default function PlayGameHeader(props) {
  const questionState = useSelector((state) => state.question);
  const maxTime =
    questionState.questions[props.index - 1] &&
    questionState.questions[props.index - 1].time;
  const [currentTime, setCurrentTime] = useState(maxTime);

  useEffect(() => {
    if (currentTime === 0) {
      props.handleSetIndexQuestion && props.handleSetIndexQuestion(props.index);
    }
    const timer = setInterval(() => {
      setCurrentTime(currentTime - 1);
      props.handleSetTimeAnswer && props.handleSetTimeAnswer(currentTime);
    }, 1000);
    return () => {
      if (props.isNewQuestion) {
        setCurrentTime(maxTime);
        props.resetTime();
      }
      clearInterval(timer);
    };
  }, [currentTime]);

  return (
    <Wrapper>
      {!props.isHideHeaderBar && (
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
                  {props.index}/{props.total}
                </span>
              </div>
            </div>
          </div>
        </Header>
      )}
    </Wrapper>
  );
}
