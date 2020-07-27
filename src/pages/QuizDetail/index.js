import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Button, Modal } from 'antd';
import { PulseLoader } from 'react-spinners';
import theme from '../../configs/theme';
import { history } from '../../redux/store';
import QuestionDetail from '../../containers/Quiz/QuestionDetail';
import { createOneRoomAction } from '../../redux/room/actions';
import { deleteOneTestAction } from '../../redux/test/actions';
import Wrapper from './styles';

export default function QuizDetail() {
  const dispatch = useDispatch();
  const testState = useSelector((state) => state.test);
  const questionState = useSelector((state) => state.question);
  const currentUserId = Number(localStorage.getItem('id'));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('role') === 'admin') {
      history.push('/admin');
    }
    if (localStorage.getItem('role') === 'participant') {
      history.push('/join');
    }
  });

  const handleClickBtnEdit = () => {
    history.push('/quiz/edit');
  };

  const handleClickGenerateCode = () => {
    dispatch(
      createOneRoomAction({ testId: testState.currentTest.id, status: true })
    );
    history.push('/entrance');
  };

  const handleClickDeleteTest = () => {
    setVisible(true);
  };

  const handleOk = () => {
    dispatch(deleteOneTestAction(testState.currentTest.id));
    history.push('/my-quizzes');
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return !testState.loading && !questionState.loading ? (
    <Wrapper>
      <Modal
        title="Delete a test"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Do you really want to delete this test?</p>
      </Modal>
      <div className="main-infor-container">
        <img
          src={testState.currentTest && testState.currentTest.image}
          alt="avatar"
          className="avatar"
        />
        <div className="infor">
          <div className="name">
            {testState.currentTest && testState.currentTest.name}
          </div>
          <div className="tag-wrapper">
            {testState.currentTest &&
              testState.currentTest.tags &&
              testState.currentTest.tags.map((e) => (
                <div className="tag" key={e.id}>
                  <Icon type="tag" className="icon" />
                  {e.name}
                </div>
              ))}
          </div>
          {testState.currentTest && testState.currentTest.description !== null && (
            <div className="description">
              <Icon type="profile" className="icon" />
              {testState.currentTest.description}
            </div>
          )}
        </div>
      </div>
      {testState.currentTest &&
      currentUserId === testState.currentTest.userId ? (
        <div className="btn-container">
          <div className="main-action">
            <Button className="btn-action" onClick={handleClickBtnEdit}>
              <Icon type="edit" theme="filled" className="icon" />
              <span>Edit</span>
            </Button>
            <Button className="btn-action" onClick={handleClickGenerateCode}>
              <Icon type="play-circle" theme="filled" className="icon" />
              <span>Start</span>
            </Button>
          </div>
          <Button
            className="btn-action btn-delete"
            onClick={handleClickDeleteTest}
          >
            <Icon type="delete" theme="filled" className="icon" />
            <span>Delete</span>
          </Button>
        </div>
      ) : (
        <div className="btn-container">
          <Button className="btn-action" onClick={handleClickGenerateCode}>
            <Icon type="play-circle" theme="filled" className="icon" />
            <span>Start</span>
          </Button>
        </div>
      )}
      <div className="question-container">
        <div className="title-preview">
          Preview ({questionState.total} questions)
        </div>
        {questionState.questions &&
          questionState.questions.map((e, index) => (
            <QuestionDetail
              key={e.id}
              index={index + 1}
              title={e.content}
              answers={e.answers}
              time={e.time}
              id={e.id}
              minScore={e.minimumScore}
              maxScore={e.score}
              view
            />
          ))}
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <div className="loading-container">
        <PulseLoader
          color={theme.palette.primary}
          size={30}
          loading={testState.loading && questionState.loading}
        />
      </div>
    </Wrapper>
  );
}
