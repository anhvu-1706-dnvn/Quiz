import React, { Component } from 'react';
import { Divider } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import Wrapper from './styles';
import QuestionItem from '../../../../components/quizz/question/Item';

export default class QuestionDetail extends Component {
  handleOnclik = () => {
    
  }

  render() {
    return (
      <Wrapper>
        <div className="question-detail-header">
          <div className="title">
            Question
            {` ${this.props.index}`}
          </div>
          <span className="counter-correct-answer">{`(${this.props.count}/${this.props.totalParticipant} correct)`}</span>
        </div>
        <div className="question-detail-body">
          <div className="wrapper">
            <div className="query">{ReactHtmlParser(this.props.title)}</div>
            <Divider orientation="left">Correct answers</Divider>
            {this.props.answers &&
              this.props.answers.map((e) =>
                e.isCorrect ? (
                  <QuestionItem
                    content={ReactHtmlParser(e.content)}
                    correct
                    key={e.id}
                  />
                ) : (
                  <QuestionItem
                    content={ReactHtmlParser(e.content)}
                    key={e.id}
                  />
                ),
              )}
          </div>
        </div>
      </Wrapper>
    );
  }
}
