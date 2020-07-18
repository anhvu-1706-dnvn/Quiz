import React, { Component } from 'react'
import { Card, Col, Row, Table } from 'antd'
import { connect } from "react-redux";
import Chart from 'react-apexcharts'
import Wrapper from './styles'
import * as StatisticAction from '../../../redux/statistic/actions'

class UserRanking extends Component {
  constructor(props) {
    super(props)
    const {id} = this.props.match.params
    this.props.retrieveRoomStatisticDetail(id)
    this.columns = [
      {
        title: 'Full name',
        dataIndex: 'fullName',
        key: 'fullName',
        
      },
      {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
      },
      {
        title: 'Time',
        dataIndex: 'time',
        width: '30%',
        key: 'time',
        render: (text) => `${text} s`,
      },
    ];
  }

  render() {
    const { roomDetail } = this.props;
    return (
      <Wrapper>
        <Card
          title=" User ranking"
        >
          <Table columns={this.columns} dataSource={roomDetail?.userRanking} />

        </Card>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { statistic } = state;
  const {roomDetail} = statistic
  return {
    roomDetail,
  };
};

const mapDispatchToProps = (dispatch) => ({
  retrieveRoomStatisticDetail: (id) => {
    dispatch(StatisticAction.getRoomStatisticDetailAction(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRanking);
