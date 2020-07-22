import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Icon, Button } from 'antd';
import { history } from '../../../redux/store';
import { getListQuestionByTestAction } from '../../../redux/question/actions';
import { EntranceContainerWrapper } from '../styles';

export default function EntranceContainer(props) {
  const { creator, test } = props.data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getListQuestionByTestAction({
        filter: JSON.stringify({ testId: test.id }),
      })
    );
  }, [dispatch]);
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
      <Button
        className="btn-start"
        onClick={() => {
          history.push('/play');
        }}
      >
        Start quiz
      </Button>
    </EntranceContainerWrapper>
  );
}
