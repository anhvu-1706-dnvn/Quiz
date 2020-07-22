import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Button, Tag, Popover, Modal, Input } from 'antd';
import { history } from '../../redux/store';
import theme from '../../configs/theme';
import QuestionDetail from '../../containers/Quiz/QuestionDetail';
import { createOneRoomAction } from '../../redux/room/actions';
import Wrapper from './styles';

export default function QuizDetail() {
  const dispatch = useDispatch();
  const testState = useSelector((state) => state.test);
  const questionState = useSelector((state) => state.question);
  const roomState = useSelector((state) => state.room);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (testState.currentTest === null) {
      history.push('/my-quizzes');
    }
  });

  const handleClickBtnEdit = () => {
    history.push('/quiz');
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleClickGenerateCode = () => {
    dispatch(createOneRoomAction({ testId: testState.currentTest.id }));
  };

  return (
    <Wrapper>
      <Modal
        title="Generate a new code"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <div>
          <div style={{ fontSize: '20px', marginBottom: '20px' }}>
            Hint: Use this code to join in the test
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Code</span>
            <Input
              style={{
                marginLeft: '20px',
                fontWeight: '700',
                fontSize: '20px',
              }}
              value={
                roomState.currentRoomCode !== null
                  ? roomState.currentRoomCode
                  : ''
              }
              disabled
            />
            <Popover content={<div>Copy this code</div>}>
              <CopyToClipboard
                text={
                  roomState.currentRoomCode !== null
                    ? roomState.currentRoomCode
                    : ''
                }
              >
                <Button
                  style={{
                    marginLeft: '20px',
                    color: '#000',
                  }}
                >
                  <Icon type="copy" theme="filled" />
                </Button>
              </CopyToClipboard>
            </Popover>
            <Popover content={<div>Re-generate a new code</div>}>
              <Button
                style={{
                  marginLeft: '10px',
                  color: '#fff',
                  backgroundColor: theme.palette.primary,
                }}
                onClick={handleClickGenerateCode}
              >
                <Icon type="sync" />
              </Button>
            </Popover>
          </div>
        </div>
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
            {roomState.currentRoomCode !== null ? (
              <Popover
                content={<div>Invite your friends to play by this code</div>}
              >
                <Tag color="#00c985" className="status">
                  {roomState.currentRoomCode}
                </Tag>
              </Popover>
            ) : (
              <Popover content={<div>Click to generate a new code</div>}>
                <Tag
                  color="#f50"
                  className="status"
                  onClick={() => setVisible(true)}
                >
                  Empty code
                </Tag>
              </Popover>
            )}
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
      <div className="btn-container">
        <div className="main-action">
          <Button className="btn-action" onClick={handleClickBtnEdit}>
            <Icon type="edit" theme="filled" className="icon" />
            <span>Edit</span>
          </Button>
          <Button className="btn-action" onClick={() => setVisible(true)}>
            <Icon type="play-circle" theme="filled" className="icon" />
            <span>Start</span>
          </Button>
        </div>
        <Button className="btn-action btn-delete">
          <Icon type="delete" theme="filled" className="icon" />
          <span>Delete</span>
        </Button>
      </div>
      <div className="question-container">
        <div className="title-preview">
          Preview (
          {questionState.total}
          {' '}
          questions)
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
              view
            />
          ))}
      </div>
    </Wrapper>
  );
}
