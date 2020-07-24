import React from 'react'
import { Col, Row } from 'antd'
import Wrapper from './styles'
import TestTable from '../../containers/List/Test'
import Badget from '../../containers/List/Test/Badget'

export default function ListTest () {
  return (
    <Wrapper>
      <Row gutter={[16,16]} type="flex">
        <Col sm={18}>
          <TestTable />
        </Col>
        <Col sm={6}>
          <Badget />
        </Col>
      </Row>
    </Wrapper>
  )
}
