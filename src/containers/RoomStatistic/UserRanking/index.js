import React, { Component } from 'react'
import { Card, Col, Row, Table } from 'antd'
import { connect } from "react-redux";
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
        sorter: (a, b) => a.score - b.score,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Time',
        dataIndex: 'time',
        width: '30%',
        key: 'time',
        render: (text) => `${text} s`,
        sorter: (a, b) => a.time - b.time,
         sortDirections: ['descend', 'ascend'],
      },
    ];
  }

  render() {
    const { roomDetail } = this.props;
    return (
      <Wrapper>
        <Card
          title={` User ranking (${roomDetail?.totalParticipant} members)`}
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
