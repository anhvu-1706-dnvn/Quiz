import React from 'react'
import { Col, Row } from 'antd'
import Wrapper from './styles'
import UserRanking from '../../containers/RoomStatistic/UserRanking'

export default function RoomStatistic (props) {
  return (
    <Wrapper>
      <Row gutter={[16,16]}>
        <Col md={12}>
          <UserRanking {...props} />
        </Col>
        <Col md={8}>
          <UserRanking {...props} />
        </Col>
      </Row>
    </Wrapper>
  )
}
