import React from 'react';
import Wrapper from './styles';

export default function RankCard(props) {
  return (
    <Wrapper>
      <div className={props.active ? 'container active' : 'container'}>
        <div className="left-section">
          <div className="infor">
            <div className="index-rank">{props.rank}</div>
            <img
              src="https://picsum.photos/200/200"
              alt="avatar"
              className="avatar"
            />
          </div>

          <div className="name">{props.name}</div>
        </div>
        <div className="right-section">
          <div className="score">
            {props.score}
            {' '}
            pts
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
