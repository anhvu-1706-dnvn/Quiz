import React, { useState } from 'react';
import { Select, Button, Divider } from 'antd';
import { SaveFilled } from '@ant-design/icons';
import AnswerOption from './AnswerOption';
import { Wrapper } from './styles';
import Editor from '../../../../components/common/Editor';

const { Option } = Select;
export default function QuestionEditor(props) {
  const [answerList, setAnswerList] = useState([
    { id: 1, content: '', isCorrect: false, isDisabled: true },
    { id: 2, content: '', isCorrect: false, isDisabled: true },
  ]);

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('30');

  // console.log(answerList);
  const handleAddAnswer = () => {
    const newAnswerList = [
      ...answerList,
      {
        id: answerList.length + 1,
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

  const handleChangeContentAnswer = (id, value) => {
    const newAnswerList = [...answerList];
    newAnswerList.map((e) => {
      if (e.id === id) {
        e.content = value;
      }
      return e;
    });
    setAnswerList(newAnswerList);
  };

  const handleDeleteAnswer = (id) => {
    const indexId = answerList.findIndex((e) => e.id === id);
    const newAnswerList = [
      ...answerList.slice(0, indexId),
      { id, content: null, isCorrect: false, isDisabled: false },
      ...answerList.slice(indexId + 1),
    ];

    setAnswerList(newAnswerList);
  };

  const handleSubmit = () => {
    setTime('30');
    setTitle('');
    setAnswerList([
      { id: 1, content: '', isCorrect: false, isDisabled: true },
      { id: 2, content: '', isCorrect: false, isDisabled: true },
    ]);
    props.handleOk({ answerList, title, time });
  };

  console.log(answerList);

  return (
    <Wrapper>
      <div className="header">
        <div className="title">Question 1</div>
        <div className="question-type-select">
          <Select className="type" value={props.type.toString()}>
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
                key={e.id}
                id={e.id}
                disabled={e.isDisabled}
                handleDeleteAnswer={() => handleDeleteAnswer(e.id)}
                handleChangeContentAnswer={handleChangeContentAnswer}
                content={e.content}
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
