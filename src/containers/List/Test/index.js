import React, { Component } from 'react'
import { Table, Card } from 'antd'
import { connect } from "react-redux";
import Wrapper from './styles'
import * as UserAction from '../../../redux/user/actions'

class UserTable extends Component {
  constructor(props) {
    super(props)
    this.props.retrieveUsers()
    this.columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        filters: [
          {
            text: 'admin',
            value: 'admin',
          },
          {
            text: 'creator',
            value: 'creator',
          },
          {
            text: 'participant',
            value: 'participant',
          },
        ],
        onFilter: (value, record) => record.role.indexOf(value) === 0,
      },
      {
        title: 'Full name',
        dataIndex: 'fullName',
        key: 'fullName',
      },
      {
        title: 'Phone',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Total test created',
        dataIndex: 'totalTest',
        key: 'totalTest',
      },
      {
        title: 'Total test played',
        dataIndex: 'totalTestPlayed',
        key: 'totalTestPlayed',
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        sorter: (a, b) => a.createdAt - b.createdAt,
        sortDirections: ['descend', 'ascend'],
      },
    ];
  }

  render() {
    const { list } = this.props;
    return (
      <Wrapper>
        <Card>
          <Table columns={this.columns} dataSource={list} pagination={{defaultPageSize: 10}}  />
        </Card>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  const {list} = user
  return {
    list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  retrieveUsers: () => {
    dispatch(UserAction.getListUserAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
