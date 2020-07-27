import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import Wrapper from './styles';
import { history } from '../../redux/store';
import UserRanking from '../../containers/RoomStatistic/UserRanking';
import TestDetail from '../../containers/RoomStatistic/TestDetail';
import SessionChart from '../../containers/RoomStatistic/SessionChart';

export default function RoomStatistic(props) {
  useEffect(() => {
    if (localStorage.getItem('role') === 'creator') {
      history.push('/');
    }
    if (localStorage.getItem('role') === 'participant') {
      history.push('/join');
    }
  });
  return (
    <Wrapper>
      <Row gutter={[16, 16]}>
        <Col md={14}>
          <TestDetail {...props} />
        </Col>
        <Col md={8}>
          <SessionChart />
          <UserRanking {...props} />
        </Col>
      </Row>
    </Wrapper>
  );
}
