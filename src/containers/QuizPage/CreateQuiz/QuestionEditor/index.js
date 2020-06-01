import React, { Component } from 'react'
import {  Select, Icon, Button } from 'antd';
import { Wrapper } from './styles'
import Editor from '../../../../components/common/Editor'

const {Option} = Select;
export default class QuestionEditor extends Component {

  handleClick = () => {
    console.log('ABC');
  }

 
  render() {
    const QuestionItem = (
      <div className="options">
        <div className="option">
          <div className="option-state">
            <Icon type="check" />
          </div>
          <div className="option-inner">
            <Editor placeholder="Answer 1" />
          </div>
          <div className="delete-option">
            <Button icon="delete" />
          </div>
        </div>
      </div>
   )
   const QuestionList = [];
      for (let i = 0; i < 2; i+=1) {
        QuestionList.push(QuestionItem)
      }
   
    return (
      <Wrapper>
        <div className="header">
          <div className="title">Question 1</div>
          <div className="question-type-select">
            <Select className="type" defaultValue="1">
              <Option value="1">Multiple Choice</Option>
              <Option value="2">Check box</Option>
            </Select>
          </div>
        </div>
        <div className="body">
          <div className="question-text-editor">
            <Editor placeholder="Write your question here" />
          </div>
          <div className="options">
            <div className="option">
              <div className="option-state">
                <Icon type="check" />
              </div>
              <div className="option-inner">
                <Editor placeholder="Answer 1" />
              </div>
              <div className="delete-option">
                <Button icon="delete" disabled />
              </div>
            </div>
          </div>
          <div className="options">
            <div className="option">
              <div className="option-state">
                <Icon type="check" />
              </div>
              <div className="option-inner">
                <Editor placeholder="Answer 1" />
              </div>
              <div className="delete-option">
                <Button icon="delete" disabled />
              </div>
            </div>
          </div>
          {QuestionList}
        
        </div>
        <div className="footer" />
      </Wrapper>
    )
  }
}


