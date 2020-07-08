import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Modal, Input } from 'antd';
import CreateQuiz from '../../containers/QuizPage/CreateQuiz';
import QuizInfo from '../../containers/QuizPage/QuizInfo';
import TagSubject from '../../components/quizz/create_quizz/TagSubject';
import { history } from '../../redux/store';
import { getListTagsAction } from '../../redux/tag/action';
import { createOneTestAction } from '../../redux/test/actions';
import Wrapper from './styles';

export default function CreateQuizz() {
  const [visible, setVisible] = useState(false);
  const [chosenTag, setChosenTag] = useState([]);
  const [errorSubjectMessage, setErrorSubjectMessage] = useState('');
  const [errorNameMessage, setErrorNameMessage] = useState('');
  const [nameQuiz, setNameQuiz] = useState('');
  const dispatch = useDispatch();

  const tagState = useSelector((state) => state.tag);
  const testState = useSelector((state) => state.test);

  useEffect(() => {
    dispatch(getListTagsAction(20, 0));
  }, [dispatch]);

  const handleOk = () => {
    if (chosenTag.length === 0) {
      setErrorSubjectMessage('Please select one or more subjects');
    }
    if (nameQuiz.length === 0) {
      setErrorNameMessage('Please enter a quiz name');
    }
    if (chosenTag.length > 0 && nameQuiz.length > 0) {
      dispatch(
        createOneTestAction({ userId: 1, name: nameQuiz, tagIds: chosenTag })
      );
      setVisible(false);
    }
  };

  const handleChangeNameQuiz = (e) => {
    setNameQuiz(e.target.value);
    if (e.target.value.length > 0) setErrorNameMessage('');
  };

  const handleCancel = () => {
    setVisible(false);
    history.push('/');
  };

  const handleChooseTag = (id) => {
    setErrorSubjectMessage('');
    let newChosenTag = [...chosenTag];
    if (newChosenTag.indexOf(id) === -1) {
      if (newChosenTag.length === 3) {
        setErrorSubjectMessage('maximum 3 subjects');
        newChosenTag = [newChosenTag[1], newChosenTag[2], id];
      } else {
        setErrorSubjectMessage('');
        newChosenTag.push(id);
      }
    } else {
      setErrorSubjectMessage('');
      const index = newChosenTag.indexOf(id);
      newChosenTag = [
        ...newChosenTag.slice(0, index),
        ...newChosenTag.slice(index + 1),
      ];
    }
    setChosenTag(newChosenTag);
  };

  return (
    <Wrapper>
      <Modal
        visible={visible}
        onOk={handleOk}
        okText={<div>Save</div>}
        onCancel={handleCancel}
        maskClosable={false}
        closable={false}
        className="modal-create-quizz"
      >
        <Wrapper>
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
                onClick={() => handleChooseTag(e.id)}
                enabled={chosenTag.indexOf(e.id) >= 0}
              />
            ))}
        </Wrapper>
      </Modal>
      {/* {!visible && Object.keys(testState.currentTest).length > 0 && ( */}
      {!visible && (
        <Row type="flex" justify="center">
          <Col xs={24} lg={14}>
            <CreateQuiz />
          </Col>
          <Col xs={0} lg={10} className="scroll-vertical">
            <QuizInfo id={testState.currentTest.id} name={nameQuiz} />
          </Col>
        </Row>
      )}
    </Wrapper>
  );
}
