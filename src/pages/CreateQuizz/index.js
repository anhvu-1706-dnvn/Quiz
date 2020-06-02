import React, { useState } from 'react';
import { Row, Col, Modal, Input } from 'antd';
import Wrapper from './styles';
import CreateQuiz from '../../containers/QuizPage/CreateQuiz';
import QuizInfo from '../../containers/QuizPage/QuizInfo';
import TagSubject from '../../components/quizz/create_quizz/TagSubject';
import { history } from '../../redux/store';

export default function CreateQuizz() {
  const [visible, setVisible] = useState(true);

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
      >
        <Wrapper>
          <h2>Tạo 1 bộ câu hỏi</h2>
          <h4>1. Tên bộ câu hỏi</h4>
          <Input />
          <br />
          <br />
          <h4>2. Chọn chủ đề liên quan</h4>
          <TagSubject nameSubject="Mathematics" />
          <TagSubject nameSubject="English" />
          <TagSubject nameSubject="Physics" />
          <TagSubject nameSubject="Chemistry" />
          <TagSubject nameSubject="Biology" />
          <TagSubject nameSubject="Science" />
          <TagSubject nameSubject="Computers" />
          <TagSubject nameSubject="Geography" />
          <TagSubject nameSubject="World Languages" />
          <TagSubject nameSubject="History" />
          <TagSubject nameSubject="Social Studies" />
          <TagSubject nameSubject="Physical Ed" />
        </Wrapper>
      </Modal>
      {!visible && (
        <Row type="flex" justify="center">
          <Col xs={24} lg={14}>
            <CreateQuiz />
          </Col>
          <Col xs={0} lg={10}>
            <QuizInfo />
          </Col>
        </Row>
      )}
    </Wrapper>
  );
}
