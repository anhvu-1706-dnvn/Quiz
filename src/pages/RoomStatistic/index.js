import React from 'react'
import { Col, Row } from 'antd'
import Wrapper from './styles'
import UserRanking from '../../containers/RoomStatistic/UserRanking'
import TestDetail from '../../containers/RoomStatistic/TestDetail'
import SessionChart from '../../containers/RoomStatistic/SessionChart'

export default function RoomStatistic (props) {
  return (
    <Wrapper>
      <Row gutter={[16,16]}>
        <Col md={12}>
          <TestDetail {...props} />
        </Col>
        <Col md={8}>
          <SessionChart />
          <UserRanking {...props} />
        </Col>
      </Row>
    </Wrapper>
  )
}
