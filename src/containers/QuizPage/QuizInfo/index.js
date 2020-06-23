import React from 'react';
import { EditFilled, TranslationOutlined } from '@ant-design/icons';
import { Icon, Progress, Checkbox } from 'antd';
import { Wrapper } from './styles';

export default function index() {
  return (
    <Wrapper>
      <div className="quiz-info-image-wrapper">
        <img
          src="https://picsum.photos/200/300"
          alt="quizz-img"
          className="quiz-info-img"
        />
        <span className="quiz-info-img-text">+ Add quiz image</span>
      </div>
      <div className="quiz-info-name-wrapper">
        <span className="quiz-info-name">Test1</span>
        <EditFilled style={{ color: '#00C985' }} />
      </div>
      <div className="quiz-info-brief-wrapper">
        <div className="item">
          <Icon type="eye" className="icon" />
          Public
        </div>
        <div className="item">
          <TranslationOutlined className="icon" />
          English
        </div>
        <div className="item">
          <Icon type="clock-circle" className="icon" />
          30 secs
        </div>
      </div>
      <div className="quiz-info-detail-wrapper">
        <div className="item">
          <Icon type="robot" className="icon" />
          Mathematics
        </div>
        <div className="item">
          <Icon type="profile" className="icon" />
          Add a description
        </div>
        <div className="item">
          <Icon type="upload" className="icon" />
          Import from spreadsheet
        </div>
      </div>
      <div className="quiz-info-quality-score-wrapper">
        <span className="title">Quiz quality score</span>
        <Progress
          percent={25}
          strokeColor="#F5A623"
          className="quiz-quality-score-progress"
        />
        <div className="item-wrapper">
          <Checkbox checked className="checkbox-item">
            Pick a relevant quiz name
          </Checkbox>
          <Checkbox className="checkbox-item">Add a quiz image</Checkbox>
          <Checkbox className="checkbox-item">Add a description</Checkbox>
          <Checkbox className="checkbox-item">
            Add at least 4 questions
          </Checkbox>
        </div>
      </div>
    </Wrapper>
  );
}
