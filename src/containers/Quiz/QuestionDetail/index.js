import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  EditFilled,
  CopyFilled,
  DeleteFilled,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Divider, Popover, Input, Modal } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import QuestionItem from '../../../components/quizz/question/Item';
import QuestionEditor from '../../QuizPage/CreateQuiz/QuestionEditor';
import { updateOneQuestionAction } from '../../../redux/question/actions';
import Wrapper from './styles';

export default function QuestionDetail(props) {
  const [visible, setVisible] = useState(false);
  const testState = useSelector((state) => state.test);
  const dispatch = useDispatch();

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = async (payload) => {
    let answerList = [];
    const id = payload.answerList[0].questionId;
    payload.answerList.map((e) => {
      if (e.content !== null) {
        const newItem = {
          id: e.id,
          content: e.content,
          isCorrect: e.isCorrect,
        };
        answerList = [...answerList, newItem];
      }
      return e;
    });
    await dispatch(
      updateOneQuestionAction(id, {
        testId: testState.currentTest.id,
        answers: answerList,
        content: payload.title,
        time: Number(payload.time),
      }),
    );
    setVisible(false);
  };
  return (
    <Wrapper>
      <Modal
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <QuestionEditor
          index={props.index}
          type={1}
          handleOk={handleOk}
          handleCancel={handleCancel}
          title={props.title}
          time={props.time}
          answerList={props.answers}
        />
      </Modal>
      <div className="question-detail-header">
        <Popover content={<div>Multiple Choice</div>}>
          <div className="question-type-icon">
            <InfoCircleOutlined className="icon" />
          </div>
        </Popover>

        <div className="title">
          Question
          {' '}
          {props.index}
        </div>
        {!props.view && (
          <div className="btn-bar">
            <button type="button" onClick={() => setVisible(true)}>
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
        )}
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
              ),
            )}
        </div>
      </div>
      <div className="question-detail-footer">
        <Input value={`${props.time} seconds`} className="select" disabled />
      </div>
    </Wrapper>
  );
}
