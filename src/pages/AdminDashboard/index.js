import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { history } from '../../redux/store';
import Wrapper from './styles';
import OverallStatistic from '../../containers/AdminDashboard/OverallStatistic';
import TestChart from '../../containers/AdminDashboard/Charts/TestChart';
import RoomTable from '../../containers/AdminDashboard/Tables/RoomTable';

export default function AdminDashboard() {
  const role = localStorage.getItem('role');
  useEffect(() => {
    if (role === 'creator') {
      history.push('/');
    }
    if (role === 'participant') {
      history.push('/join');
    }
  });
  return (
    <Wrapper>
      <Row gutter={[16, 16]}>
        <Col>
          <OverallStatistic />
        </Col>
      </Row>
      <Row gutter={[32, 32]} type="flex">
        <Col md={12}>
          <TestChart />
        </Col>
        <Col md={12}>
          <RoomTable />
        </Col>
      </Row>
    </Wrapper>
  );
}
