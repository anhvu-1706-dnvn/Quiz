import React from 'react';
import Wrapper from './styles';

export default function UserCard(props) {
  return (
    <Wrapper>
      <img src={props.image} className="avatar" alt="avatar" />
      <div className="name">{props.name}</div>
    </Wrapper>
  );
}
