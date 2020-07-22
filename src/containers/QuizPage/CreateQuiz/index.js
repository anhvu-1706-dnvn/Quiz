/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Icon, Modal } from 'antd';
import QuestionEditor from './QuestionEditor';
import QuestionType from '../../../components/quizz/create_quizz/QuestionType';
import QuestionDetail from '../../Quiz/QuestionDetail';
import {
  getListQuestionByTestAction,
  createOneQuestionAction,
} from '../../../redux/question/actions';
import { Wrapper } from './styles';

export default function CreateQuiz(props) {
  const [visible, setVisible] = useState(false);
  const [questionType, setQuestionType] = useState(1);
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.question.questions);
  const total = useSelector((state) => state.question.total);

  const testId = props.id;

  useEffect(() => {
    if (testId) {
      dispatch(
        getListQuestionByTestAction({
          limit: 50,
          offset: 0,
          filter: JSON.stringify({ testId }),
          orderBy: 'id',
        })
      );
    }
  }, [dispatch]);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async (payload) => {
    let answerList = [];
    payload.answerList.map((e) => {
      if (e.content !== null) {
        const newItem = {
          content: e.content,
          isCorrect: e.isCorrect,
        };
        answerList = [...answerList, newItem];
      }
      return e;
    });
    await dispatch(
      createOneQuestionAction({
        testId,
        answers: answerList,
        content: payload.title,
        time: Number(payload.time),
        minimumScore: Number(payload.minScore),
        score: Number(payload.maxScore),
      })
    );
    await dispatch(
      getListQuestionByTestAction({
        limit: 50,
        offset: 0,
        filter: JSON.stringify({ testId }),
        orderBy: 'id',
      })
    );
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleClickQuestionType = (value) => {
    setQuestionType(value);
    showModal();
  };

  return (
    <Wrapper>
      <div className="question-header">
        <div className="questions-header-inner">
          <div className="editor-title">Quiz Editor</div>
          <Button className="new-question" onClick={showModal}>
            <Icon type="plus-circle" className="icon-plus" />
            <span>New question</span>
          </Button>
        </div>
      </div>
      <div className="questions-body">
        {questions && questions.length === 0 && (
          <div className="questionType-panel">
            <QuestionType
              name="multiple choice"
              iconType="info-circle"
              backgroundColor="#B8336A"
              onClick={() => handleClickQuestionType(1)}
            />
            <QuestionType
              name="checkbox"
              iconType="check-circle"
              backgroundColor="#26949E"
              onClick={() => handleClickQuestionType(2)}
            />
            <QuestionType
              name="fill in the blank"
              iconType="minus-circle"
              backgroundColor="#D79928"
              onClick={() => handleClickQuestionType(3)}
            />
          </div>
        )}

        <div>
          {questions &&
            questions.map((e, index) => (
              <QuestionDetail
                key={e.id}
                index={index + 1}
                title={e.content}
                answers={e.answers}
                time={e.time}
                id={e.id}
                maxScore={e.score}
                minScore={e.minimumScore}
              />
            ))}
        </div>
      </div>

      <Modal
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <QuestionEditor
          index={total + 1}
          type={questionType}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </Modal>
    </Wrapper>
  );
}
