/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import { Button, Icon, Modal } from 'antd';
import { Wrapper } from './styles';
import QuestionEditor from './QuestionEditor';
import QuestionType from '../../../components/quizz/create_quizz/QuestionType';
// import PageTitle from '../../../components/common/PageTitle/index';

export default class CreateQuiz extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Wrapper>
        <div className="question-header">
          <div className="questions-header-inner">
            <div className="editor-title">Quiz Editor</div>
            <Button className="new-question" onClick={this.showModal}>
              <Icon type="plus-circle" />
              <span>Tạo câu hỏi</span>
            </Button>
            <Button className="save-draft">
              <span>Lưu nháp</span>
            </Button>
          </div>
        </div>
        <div className="questions-body">
          <div className="questionType-panel">
            <QuestionType name="multiple choice" iconType="save" color="red" />
            <QuestionType name="checkbox" iconType="save" color="red" />
            <QuestionType
              name="fill in the blank"
              iconType="save"
              color="red"
            />
          </div>
        </div>

        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          okText={
            <div>
              <Icon type="save" />
              <span> Save</span>
            </div>
          }
          onCancel={this.handleCancel}
        >
          <QuestionEditor />
        </Modal>
      </Wrapper>
    );
  }
}
