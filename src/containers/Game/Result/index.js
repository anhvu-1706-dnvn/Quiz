import React from 'react';
import { Progress, Icon, Button } from 'antd';
import { history } from '../../../redux/store';
import { ResultContainerWrapper } from '../styles';

export default function ResultContainer() {
  return (
    <ResultContainerWrapper>
      <div className="title">
        <img
          src="https://picsum.photos/200/200"
          alt="avatar"
          className="avatar"
        />
        <div>Hieu Nguyen</div>
      </div>
      <div className="played-stat">
        <div className="title">Performance Stats</div>
        <div className="detail-wrapper">
          <div className="stat-container">
            <Icon type="check-circle" theme="filled" className="icon-correct" />
            <div className="detail">4 correct</div>
          </div>
          <div className="stat-container">
            <Icon
              type="close-circle"
              theme="filled"
              className="icon-incorrect"
            />
            <div className="detail">12 incorrect</div>
          </div>
        </div>
        <div className="accuracy-title">Accuracy</div>
        <Progress percent={25} />
      </div>
      <div className="played-infor">
        <div className="infor-container">
          <div className="left-section">
            <p className="title">Rank</p>
            <p className="detail">19/19</p>
          </div>
          <div className="right-section">
            <Icon type="golden" theme="filled" className="icon golden-icon" />
          </div>
        </div>
        <div className="infor-container">
          <div className="left-section">
            <p className="title">Score</p>
            <p className="detail">3180</p>
          </div>
          <div className="right-section">
            <Icon
              type="dollar-circle"
              theme="filled"
              className="icon dollar-icon"
            />
          </div>
        </div>
      </div>
      <div className="btn-container">
        <Button
          className="btn-result-page btn-play-again"
          onClick={() => history.push('/entrance')}
        >
          Play again
        </Button>
        <Button
          className="btn-result-page btn-back"
          onClick={() => history.push('/join')}
        >
          Find a new quiz
        </Button>
      </div>
    </ResultContainerWrapper>
  );
}
