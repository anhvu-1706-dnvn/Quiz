import React from 'react';
import Wrapper from './styles';

export default function QuizzCard() {
  return (
    <Wrapper>
      <div className="card-header">
        <img
          src="https://picsum.photos/200/300"
          alt="quizz-img"
          className="quizz-img"
        />
        <div className="card-stat-row">
          <div className="card-stat">10 Qs</div>
          <div className="card-stat">3.7k plays</div>
        </div>
      </div>
      <div className="content-wrapper">Parallel and Perpendicular</div>
    </Wrapper>
  );
}
