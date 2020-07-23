import React from 'react';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';
import { getListTestAction } from '../../../../redux/test/actions';
import Wrapper from './styles';

const { Option } = Select;

export default function OptionBar(props) {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('id');

  const handleChange = (value) => {
    const params = {
      orderBy: '-id',
      filter: JSON.stringify({ userId }),
    };

    if (value === 'least') {
      params.orderBy = 'id';
    } else if (value === 'most') {
      params.orderBy = '-id';
    } else {
      params.orderBy = 'name';
    }
    dispatch(getListTestAction(params));
  };

  return (
    <Wrapper>
      <div className="title">
        All my quizzes (
        {props.total}
        )
      </div>
      <div className="order-container">
        <span>Order:</span>
        <Select
          defaultValue="most"
          className="order-select"
          onChange={handleChange}
        >
          <Option value="least">Least recent</Option>
          <Option value="most">Most recent</Option>
          <Option value="alph">Alphabetical</Option>
        </Select>
      </div>
    </Wrapper>
  );
}
