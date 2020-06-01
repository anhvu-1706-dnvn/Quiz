import React, { Component } from "react";
import { Button, Icon, Modal } from "antd";
import { Wrapper } from "./styles";
import QuestionEditor from "./QuestionEditor";
// import PageTitle from '../../../components/common/PageTitle/index';

export default class CreateQuiz extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
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
        <div className="questions-body" />

        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          okText={(
            <div>
              <Icon type="save" />
              <span> Save</span>
            </div>
          )}
          onCancel={this.handleCancel}
        >
          <QuestionEditor />
        </Modal>
      </Wrapper>
    );
  }
}
