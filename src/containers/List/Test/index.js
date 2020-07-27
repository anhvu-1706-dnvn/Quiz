import React, { Component } from 'react';
import { Table, Card } from 'antd';
import { connect } from 'react-redux';
import Wrapper from './styles';
import * as TestAction from '../../../redux/test/actions';

class TestTable extends Component {
  constructor(props) {
    super(props);
    this.props.retrieveTests();
    this.columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (text) => (
          <div className="test-img">
            <img src={text} alt="" />
          </div>
        ),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Total Played',
        dataIndex: 'totalRoom',
        key: 'totalRoom',
        sorter: (a, b) => a.totalRoom - b.totalRoom,
        sortDirections: ['descend', 'ascend'],
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
    const { tests } = this.props;
    return (
      <Wrapper>
        <Card>
          <Table
            columns={this.columns}
            dataSource={tests}
            pagination={{ defaultPageSize: 10 }}
          />
        </Card>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { test } = state;
  const { tests } = test;
  return {
    tests,
  };
};

const mapDispatchToProps = (dispatch) => ({
  retrieveTests: () => {
    dispatch(
      TestAction.getListTestAction({ limit: 500, offset: 0, orderBy: 'id' })
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TestTable);
