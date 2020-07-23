import React from 'react'
import { Col, Row } from 'antd'
import Wrapper from './styles'
import UserTable from '../../containers/ListUser/Table'

export default function ListUser () {
  return (
    <Wrapper>
      <Row gutter={[16,16]} type="flex">
        <Col sm={24}>
          <UserTable />
        </Col>
      </Row>
    </Wrapper>
  )
}
