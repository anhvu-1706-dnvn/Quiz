import React from 'react';
import { Select } from 'antd';
import Wrapper from './styles';

const { Option } = Select;

export default function OptionBar() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Wrapper>
      <div className="title">All my quizzes (5)</div>
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
