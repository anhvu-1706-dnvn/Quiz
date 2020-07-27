import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { history } from '../../redux/store';
import CreateQuiz from '../../containers/QuizPage/CreateQuiz';
import QuizInfo from '../../containers/QuizPage/QuizInfo';
import Wrapper from './styles';

export default function EditQuiz() {
  const testState = useSelector((state) => state.test);
  const role = localStorage.getItem('role');
  useEffect(() => {
    if (role === 'admin') {
      history.push('/admin');
    }
    if (role === 'participant') {
      history.push('/join');
    }
    if (testState.currentTest === null) {
      history.push('/');
    }
  });
  return (
    <Wrapper>
      <div className="create-quiz-content-wrapper">
        <Row type="flex" justify="center">
          <Col xs={24} lg={14}>
            <CreateQuiz />
          </Col>
          <Col xs={0} lg={10} className="scroll-vertical">
            <QuizInfo />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}
