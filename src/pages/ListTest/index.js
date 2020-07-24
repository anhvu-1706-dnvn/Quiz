import React from 'react'
import { Col, Row } from 'antd'
import Wrapper from './styles'
import TestTable from '../../containers/List/Test'

export default function ListTest () {
  return (
    <Wrapper>
      <Row gutter={[16,16]} type="flex">
        <Col sm={24}>
          <TestTable />
        </Col>
      </Row>
    </Wrapper>
  )
}
