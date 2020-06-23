import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Modal, Input } from 'antd';
import CreateQuiz from '../../containers/QuizPage/CreateQuiz';
import QuizInfo from '../../containers/QuizPage/QuizInfo';
import TagSubject from '../../components/quizz/create_quizz/TagSubject';
import { history } from '../../redux/store';
import { getListTagsAction } from '../../redux/tag/action';
import Wrapper from './styles';

export default function CreateQuizz() {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.tag);
  useEffect(() => {
    dispatch(getListTagsAction(20, 0));
  }, [dispatch]);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
    history.push('/');
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
        <Wrapper>
          <h2>Create a quiz</h2>
          <h4>1. Name this quiz</h4>
          <Input />
          <br />
          <br />
          <h4>2. Choose relevant subjects</h4>
          {data.tags.length > 0 &&
            data.tags.map((e) => (
              <TagSubject nameSubject={e.name} key={e.id} />
            ))}
        </Wrapper>
      </Modal>
      {!visible && (
        <Row type="flex" justify="center">
          <Col xs={24} lg={14}>
            <CreateQuiz />
          </Col>
          <Col xs={0} lg={10} className="scroll-vertical">
            <QuizInfo />
          </Col>
        </Row>
      )}
    </Wrapper>
  );
}
