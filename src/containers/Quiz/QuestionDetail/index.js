import React from 'react';
import {
  EditFilled,
  CopyFilled,
  DeleteFilled,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Divider, Select, Popover } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import QuestionItem from '../../../components/quizz/question/Item';
import Wrapper from './styles';

const { Option } = Select;
export default function QuestionDetail(props) {
  return (
    <Wrapper>
      <div className="question-detail-header">
        <Popover content={<div>Multiple Choice</div>}>
          <div className="question-type-icon">
            <InfoCircleOutlined className="icon" />
          </div>
        </Popover>

        <div className="title">Question {props.index}</div>
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
          <div className="query">{ReactHtmlParser(props.title)}</div>
          <Divider orientation="left">answer choices</Divider>
          {props.answers &&
            props.answers.map((e) =>
              e.isCorrect ? (
                <QuestionItem
                  content={ReactHtmlParser(e.content)}
                  correct
                  key={e.id}
                />
              ) : (
                <QuestionItem content={ReactHtmlParser(e.content)} key={e.id} />
              )
            )}
        </div>
      </div>
      <div className="question-detail-footer">
        <Select value={props.time.toString()} className="select">
          <Option value="5">5 seconds</Option>
          <Option value="10">10 seconds</Option>
          <Option value="20">20 seconds</Option>
          <Option value="30">30 seconds</Option>
          <Option value="45">45 seconds</Option>
          <Option value="60">60 seconds</Option>
        </Select>
      </div>
    </Wrapper>
  );
}
