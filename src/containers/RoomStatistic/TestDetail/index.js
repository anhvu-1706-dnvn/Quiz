import React, { Component } from 'react'
import { Icon } from 'antd'
// import { Card, Col, Row, Table,Icon } from 'antd'
import { connect } from "react-redux";
import {
  TagOutlined,
  
} from '@ant-design/icons';
import Wrapper from './styles'
import QuestionDetail from './QuestionDetail';

class TestDetail extends Component {

  handleOnclick = () => {
    // eslint-disable-next-line no-console
    console.log('OK');
  }

  render() {
    const { roomDetail } = this.props;
    const questions = roomDetail?.questions || [];
    const currentTest = roomDetail?.test;
    return (
      <Wrapper>
        <div className="test-info">
          <div className="name-image-wrapper">
            <div className="quiz-info-image-wrapper">
              <img
                src={currentTest?.image}
                alt="quizz-img"
                className="quiz-info-img" />
            </div>
            <div className="quiz-info-name-wrapper">
              <span className="quiz-info-name">{currentTest?.name}</span>
              <span className="quiz-info-author">{`Host: ${roomDetail?.creator.fullName}`}</span>
            </div>
          </div>
          <div className="quiz-info-detail-wrapper">
            {currentTest?.tags &&
          currentTest.tags.length > 0 &&
          currentTest.tags.map((e) => (
            <div
              className="item"
              key={e.id}>
              <TagOutlined className="icon" />
              {` ${e.name}`}
            </div>
          ))}
            <div className="item item-description">
              <Icon type="profile" className="icon icon-description" />
              <div className="description">{currentTest?.description}</div>
            </div>
          </div>
        </div>
        <div className="question-area">
          {questions &&
            questions.map((e, index) => (
              <QuestionDetail
                key={e.id}
                index={index + 1}
                title={e.content}
                answers={e.correctAnswers}
                count={e.count}
                time={e.time}
                totalParticipant={roomDetail?.totalParticipant}
                id={e.id}
              />
            ))}
        </div>
        
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { statistic } = state;
  const {roomDetail} = statistic
  return {
    roomDetail,
  };
};

// const mapDispatchToProps = (dispatch) => ({
 
// });

export default connect(mapStateToProps, {})(TestDetail);
