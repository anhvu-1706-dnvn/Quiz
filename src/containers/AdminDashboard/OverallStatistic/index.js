import React, { Component } from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { connect } from "react-redux";
import Wrapper from './styles'
import * as OverallStatisticAction from '../../../redux/statistic/actions'

class OverallStatistic extends Component {
  constructor(props) {
    super(props)
    const {totalAdmin, totalCreator,totalParticipant, totalTest} = this.props;
    if(!totalAdmin || !totalCreator || !totalParticipant || !totalTest) {
      this.props.retrieveStatistic()
    }
  }

  render() {
    return (
      <Wrapper>
        <Row gutter={24}>
          <Col xs={24} md={12} lg={6}>
            <Card className="card-main">
              <Statistic
                className="left-info"
                title="ADMIN"
                value={this.props?.totalAdmin}
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Card className="card-main">
              <Statistic
                className="left-info"
                title="PARTICIPANT"
                value={this.props?.totalParticipant}
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Card className="card-main">
              <Statistic
                className="left-info"
                title="Creator"
                value={this.props?.totalCreator}
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Card className="card-main">
              <Statistic
                className="left-info"
                title="TOTAL QUIZ"
                value={this.props?.totalTest}
              />
            </Card>
          </Col>
        </Row>

      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { statistic } = state;
  const {totalAdmin, totalCreator,totalParticipant, totalTest} = statistic
  return {
    totalAdmin, totalCreator,totalParticipant, totalTest,
  };
};

const mapDispatchToProps = (dispatch) => ({
  retrieveStatistic: () => {
    dispatch(OverallStatisticAction.getOverallStatisticAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OverallStatistic);
