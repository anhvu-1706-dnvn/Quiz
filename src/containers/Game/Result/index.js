import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GridLoader } from 'react-spinners';
import { Progress, Icon, Button } from 'antd';
import { history } from '../../../redux/store';
import avatar from '../../../assets/images/avatar.svg';
import { getOneSessionAction } from '../../../redux/session/actions';
import { ResultContainerWrapper } from '../styles';

export default function ResultContainer() {
  const dispatch = useDispatch();
  const sessionState = useSelector((state) => state.session);
  useEffect(() => {
    if (sessionState.currentSession === null) {
      history.push('/join');
    } else {
      dispatch(getOneSessionAction(sessionState.currentSession.id));
    }
  }, [dispatch]);
  const fullName = localStorage.getItem('fullName');
  return sessionState.loading ? (
    <ResultContainerWrapper>
      <div className="loading-container">
        <GridLoader size={50} color={'#fff'} loading={sessionState.loading} />
      </div>
    </ResultContainerWrapper>
  ) : (
    <ResultContainerWrapper>
      <div className="title">
        <img src={avatar} alt="avatar" className="avatar" />
        <div>{fullName}</div>
      </div>
      <div className="played-stat">
        <div className="title">Performance Stats</div>
        <div className="detail-wrapper">
          <div className="stat-container" style={{ marginRight: '20px' }}>
            <Icon type="check-circle" theme="filled" className="icon-correct" />
            <div className="detail">
              {sessionState.currentSession &&
                sessionState.currentSession.totalMatched}{' '}
              correct
            </div>
          </div>
          <div className="stat-container">
            <Icon
              type="close-circle"
              theme="filled"
              className="icon-incorrect"
            />
            <div className="detail">
              {sessionState.currentSession &&
                sessionState.currentSession.totalQuestions -
                  sessionState.currentSession.totalMatched}{' '}
              incorrect
            </div>
          </div>
        </div>
        <div className="accuracy-title">Accuracy</div>
        {sessionState.currentSession && (
          <Progress
            percent={Math.ceil(
              (100 * sessionState.currentSession.totalMatched) /
                sessionState.currentSession.totalQuestions
            )}
          />
        )}
      </div>
      <div className="played-infor">
        <div className="infor-container">
          <div className="left-section">
            <p className="title">Rank</p>
            <p className="detail">
              {sessionState.currentSession && sessionState.currentSession.rank}/
              {sessionState.currentSession &&
                sessionState.currentSession.totalParticipant}
            </p>
          </div>
          <div className="right-section">
            <Icon type="golden" theme="filled" className="icon golden-icon" />
          </div>
        </div>
        <div className="infor-container">
          <div className="left-section">
            <p className="title">Score</p>
            <p className="detail">
              {sessionState.currentSession &&
                sessionState.currentSession.totalScore}
            </p>
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
          className="btn-result-page btn-back"
          onClick={() => history.push('/join')}
        >
          Find a new quiz
        </Button>
      </div>
    </ResultContainerWrapper>
  );
}
