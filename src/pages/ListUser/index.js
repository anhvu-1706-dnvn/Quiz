import React from 'react'
import { Col, Row } from 'antd'
import Wrapper from './styles'
import UserTable from '../../containers/List/User'
import Badget from '../../containers/List/User/Badget'

export default function ListUser () {
  return (
    <Wrapper>
      <Row gutter={[16,16]} type="flex">
        <Col sm={18}>
          <UserTable />
        </Col>
        <Col sm={6}>
          <Badget />
        </Col>
      </Row>
    </Wrapper>
  )
}
