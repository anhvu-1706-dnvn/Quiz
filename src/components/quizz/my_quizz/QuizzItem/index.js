import React from 'react';
import { CaretRightOutlined, CopyrightCircleFilled } from '@ant-design/icons';
import { Tag } from 'antd';
import Wrapper from './styles';

export default function QuizzItem() {
  return (
    <Wrapper>
      <div className="content-wrapper">
        <img
          src="https://picsum.photos/100/100"
          alt="quizz-img"
          className="image"
        />
        <div>
          <h2>
            Test1
            <span className="amount-qs-text">(1 Qs)</span>
          </h2>
          <h4>
            <CaretRightOutlined className="icon" />
            Played 0 times
          </h4>
          <h4>
            <CopyrightCircleFilled className="icon avatar" />
            Created 4 days ago by Hieu
          </h4>
        </div>
      </div>
      <Tag color="#f50" className="tag">
        DRAFT
      </Tag>
    </Wrapper>
  );
}
