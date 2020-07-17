import React, { useState } from 'react';
import { Select, Button, Divider } from 'antd';
import { SaveFilled } from '@ant-design/icons';
import AnswerOption from './AnswerOption';
import { Wrapper } from './styles';
import Editor from '../../../../components/common/Editor';

const { Option } = Select;
export default function QuestionEditor(props) {
  let data = [];
  if (props.answerList) {
    data = [...props.answerList];
    data.map((e, index) => {
      e.key = index + 1;
      if (e.key <= 2) e.isDisabled = true;
      else e.isDisabled = false;
      return e;
    });
  }

  const [answerList, setAnswerList] = useState(
    data.length > 0
      ? data
      : [
          { key: 1, content: '', isCorrect: false, isDisabled: true },
          { key: 2, content: '', isCorrect: false, isDisabled: true },
        ]
  );

  const [title, setTitle] = useState(props.title || '');
  const [time, setTime] = useState(
    (props.time && props.time.toString()) || '30'
  );

  // console.log(answerList);
  const handleAddAnswer = () => {
    const newAnswerList = [
      ...answerList,
      {
        key: answerList.length + 1,
        content: '',
        isCorrect: false,
        isDisabled: false,
      },
    ];
    setAnswerList(newAnswerList);
  };

  const handleChangeTitle = (value) => {
    setTitle(value);
  };

  const handleChangeContentAnswer = (key, value) => {
    const newAnswerList = [...answerList];
    newAnswerList[
      newAnswerList.findIndex((e) => e.key === key)
    ].content = value;
    setAnswerList(newAnswerList);
  };

  const handleChangeStatusAnswer = (key, status) => {
    const newAnswerList = [...answerList];
    newAnswerList[
      newAnswerList.findIndex((e) => e.key === key)
    ].isCorrect = status;
    setAnswerList(newAnswerList);
  };

  const handleDeleteAnswer = (key) => {
    const indexId = answerList.findIndex((e) => e.key === key);
    const newAnswerList = [
      ...answerList.slice(0, indexId),
      { key, content: null, isCorrect: false, isDisabled: false },
      ...answerList.slice(indexId + 1),
    ];

    setAnswerList(newAnswerList);
  };

  const handleSubmit = () => {
    if (data.length === 0) {
      setAnswerList([
        { key: 1, content: '', isCorrect: false, isDisabled: true },
        { key: 2, content: '', isCorrect: false, isDisabled: true },
      ]);
      setTime('30');
      setTitle('');
    }

    props.handleOk({ answerList, title, time });
  };

  return (
    <Wrapper>
      <div className="header">
        <div className="title">Question {props.index}</div>
        <div className="question-type-select">
          <Select className="type" value={props.type && props.type.toString()}>
            <Option value="1">Multiple Choice</Option>
            <Option value="2">Checkbox</Option>
            <Option value="3">Fill in the blank</Option>
          </Select>
        </div>
      </div>
      <div className="body">
        <div className="question-text-editor">
          <Editor
            placeholder="Write your question here"
            content={title}
            handleChangeTitle={handleChangeTitle}
          />
        </div>
        {answerList.map(
          (e) =>
            e.content !== null && (
              <AnswerOption
                key={e.key}
                id={e.key}
                disabled={e.isDisabled}
                handleDeleteAnswer={() => handleDeleteAnswer(e.key)}
                handleChangeContentAnswer={handleChangeContentAnswer}
                handleChangeStatusAnswer={() =>
                  handleChangeStatusAnswer(e.key, !e.isCorrect)
                }
                content={e.content}
                isCorrect={e.isCorrect}
              />
            )
        )}
      </div>
      <Button onClick={handleAddAnswer}>Add answer option</Button>
      <Divider />
      <div className="footer">
        <Select value={time} className="select" onChange={(e) => setTime(e)}>
          <Option value="5">5 seconds</Option>
          <Option value="10">10 seconds</Option>
          <Option value="20">20 seconds</Option>
          <Option value="30">30 seconds</Option>
          <Option value="45">45 seconds</Option>
          <Option value="60">60 seconds</Option>
        </Select>

        <div className="btn-area">
          <Button onClick={() => props.handleCancel()}>Cancel</Button>
          <Button onClick={() => handleSubmit()} className="ant-btn-primary">
            <SaveFilled />
            <span> Save</span>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
