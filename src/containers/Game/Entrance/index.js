import React from 'react';
import { Button, Icon } from 'antd';
import { EntranceContainerWrapper } from '../styles';

export default function EntranceContainer(props) {
  const { creator, test } = props.data;
  console.log(creator);
  return (
    <EntranceContainerWrapper>
      <div className="title">
        <img src={test.image} className="test-image" alt="avatar" />
        <div className="infor">
          <div className="name">{test.name}</div>
          <div className="total-question">16 questions</div>
        </div>
      </div>
      <div className="creator-section">
        <div>
          <Icon type="user" style={{ marginRight: '8px' }} />
          Created:{' '}
          <span style={{ marginLeft: '13px' }}>{creator.fullName}</span>
        </div>
      </div>
      <Button className="btn-start">Start quiz</Button>
    </EntranceContainerWrapper>
  );
}
