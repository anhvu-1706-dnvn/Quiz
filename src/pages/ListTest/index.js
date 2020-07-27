import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import Wrapper from './styles';
import { history } from '../../redux/store';
import TestTable from '../../containers/List/Test';
import Badget from '../../containers/List/Test/Badget';

export default function ListTest() {
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
      <Row gutter={[16, 16]} type="flex">
        <Col sm={18}>
          <TestTable />
        </Col>
        <Col sm={6}>
          <Badget />
        </Col>
      </Row>
    </Wrapper>
  );
}
