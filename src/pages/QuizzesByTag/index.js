import React from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import QuizzCard from '../../components/quizz/item/QuizzCard';
import { history } from '../../redux/store';
import Wrapper from './styles';

export default function QuizzesByTag(props) {
  return (
    <Wrapper>
      <div className="content-wrapper">
        <div className="quizz-tag-header">
          <img
            src="https://picsum.photos/200/300"
            alt="quizz-img"
            className="tag-img"
          />
          <div className="path-wrapper">
            <div className="title">Popular Quizzes</div>
            <div className="path">
              <span className="path-home" onClick={() => history.push('/')}>
                Home
              </span>
              <RightOutlined />
              <div className="name-tag">
                {props.match.params.tagName.replace(/-/g, ' ')}
              </div>
            </div>
          </div>
        </div>
        <div className="list-card-container">
          <div className="list-card-row">
            <QuizzCard />
            <QuizzCard />
            <QuizzCard />
            <QuizzCard />
          </div>
          <div className="list-card-row">
            <QuizzCard />
            <QuizzCard />
            <QuizzCard />
            <QuizzCard />
          </div>
          <div className="list-card-row">
            <QuizzCard />
            <QuizzCard />
            <QuizzCard />
            <QuizzCard />
          </div>
          <Button>Load More</Button>
        </div>
      </div>
    </Wrapper>
  );
}
