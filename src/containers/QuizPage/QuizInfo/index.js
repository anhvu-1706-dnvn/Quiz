import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EditFilled, TranslationOutlined } from '@ant-design/icons';
import { Modal, Input, Icon, Progress, Checkbox } from 'antd';
import TagSubject from '../../../components/quizz/create_quizz/TagSubject';
import { getListTagsAction } from '../../../redux/tag/action';
import { getOneTestAction } from '../../../redux/test/actions';
import { Wrapper } from './styles';

export default function QuizInfo(props) {
  const [visible, setVisible] = useState(false);
  const [errorSubjectMessage, setErrorSubjectMessage] = useState('');
  const [chosenTag, setChosenTag] = useState([]);
  const [errorNameMessage, setErrorNameMessage] = useState('');
  const [nameQuiz, setNameQuiz] = useState('');
  const dispatch = useDispatch();

  const tagState = useSelector((state) => state.tag);
  const currentTest = useSelector((state) => state.test.currentTest);

  useEffect(() => {
    dispatch(getListTagsAction(20, 0));
    //dispatch(getOneTestAction(props.id));
    dispatch(getOneTestAction(52));
    setNameQuiz(currentTest.name);
  }, [dispatch]);

  console.log(nameQuiz);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleChangeNameQuiz = (e) => {
    setNameQuiz(e.target.value);
    if (e.target.value.length > 0) setErrorNameMessage('');
  };

  return (
    <Wrapper>
      <Modal
        visible={visible}
        onOk={handleOk}
        okText={<div>Next</div>}
        onCancel={handleCancel}
        maskClosable={false}
        closable={false}
        className="modal-create-quizz"
      >
        <div className="edit-quiz-info-modal-body">
          <h2>Create a quiz</h2>
          <div className="title">
            1. Name this quiz
            {errorNameMessage.length > 0 && (
              <div className="error">({errorNameMessage})</div>
            )}
          </div>
          <Input value={nameQuiz} onChange={handleChangeNameQuiz} />
          <br />
          <br />
          <div className="title">
            2. Choose relevant subjects
            {errorSubjectMessage.length > 0 && (
              <div className="error">({errorSubjectMessage})</div>
            )}
          </div>
          {tagState.tags.length > 0 &&
            tagState.tags.map((e) => (
              <TagSubject
                nameSubject={e.name}
                key={e.id}
                // onClick={() => handleChooseTag(e.id)}
                enabled={chosenTag.indexOf(e.id) >= 0}
              />
            ))}
        </div>
      </Modal>
      <div className="quiz-info-image-wrapper">
        <img
          src="https://picsum.photos/200/300"
          alt="quizz-img"
          className="quiz-info-img"
        />
        <span className="quiz-info-img-text">+ Add quiz image</span>
      </div>
      <div
        className="quiz-info-name-wrapper"
        onClick={() => {
          setVisible(true);
        }}
      >
        <span className="quiz-info-name">{currentTest.name}</span>
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
        {currentTest.tags &&
          currentTest.tags.length > 0 &&
          currentTest.tags.map((e) => (
            <div className="item" key={e.id}>
              <Icon type="robot" className="icon" />
              {e.name}
            </div>
          ))}

        <div className="item">
          <Icon type="profile" className="icon" />
          Add a description
        </div>
        {/* <div className="item">
          <Icon type="upload" className="icon" />
          Import from spreadsheet
        </div> */}
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
