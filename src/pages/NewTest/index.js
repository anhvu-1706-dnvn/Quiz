import React from 'react';
import { Row, Col } from 'antd'
import Wrapper from './styles';
import CreateQuiz from '../../containers/QuizPage/CreateQuiz'
import QuizInfo from '../../containers/QuizPage/QuizInfo'

export default function NewTest() {
  return (
    <Wrapper>
      <Row type="flex" justify="center">
        <Col xs={24} lg={18}>
          <CreateQuiz />
        </Col>
        <Col xs={0} lg={6}>
          <QuizInfo />
        </Col>
      </Row>
    </Wrapper>
  );
}
