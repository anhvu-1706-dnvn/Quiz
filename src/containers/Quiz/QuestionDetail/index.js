import React from 'react';
import {
  EditFilled,
  CopyFilled,
  DeleteFilled,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Divider, Select, Popover } from 'antd';
import QuestionItem from '../../../components/quizz/question/Item';
import Wrapper from './styles';

const { Option } = Select;
export default function QuestionDetail() {
  return (
    <Wrapper>
      <div className="question-detail-header">
        <Popover content={<div>Multiple Choice</div>}>
          <div className="question-type-icon">
            <InfoCircleOutlined className="icon" />
          </div>
        </Popover>

        <div className="title">Question 1</div>
        <div className="btn-bar">
          <button type="button">
            <EditFilled className="icon" />
            Edit
          </button>
          <Popover content={<div>Duplicate</div>}>
            <button type="button">
              <CopyFilled />
            </button>
          </Popover>
          <Popover content={<div>Delete</div>}>
            <button type="button">
              <DeleteFilled />
            </button>
          </Popover>
        </div>
      </div>
      <div className="question-detail-body">
        <div className="wrapper">
          <div className="query">Abcd</div>
          <Divider orientation="left">answer choices</Divider>
          <QuestionItem correct />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
        </div>
      </div>
      <div className="question-detail-footer">
        <Select defaultValue="3" className="select">
          <Option value="0">5 seconds</Option>
          <Option value="1">10 seconds</Option>
          <Option value="2">20 seconds</Option>
          <Option value="3">30 seconds</Option>
          <Option value="4">45 seconds</Option>
          <Option value="5">60 seconds</Option>
          <Option value="6">2 minutes</Option>
          <Option value="7">3 minutes</Option>
          <Option value="8">5 minutes</Option>
          <Option value="9">15 minutes</Option>
        </Select>
      </div>
    </Wrapper>
  );
}
