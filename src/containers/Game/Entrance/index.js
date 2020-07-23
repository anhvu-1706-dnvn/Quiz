import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Icon, Button } from 'antd';
import { history } from '../../../redux/store';
import { getListQuestionByTestAction } from '../../../redux/question/actions';
import { createOneSessionAction } from '../../../redux/session/actions';
import { EntranceContainerWrapper } from '../styles';

export default function EntranceContainer(props) {
  const { creator, test, id } = props.data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getListQuestionByTestAction({
        orderBy: 'id',
        filter: JSON.stringify({ testId: test.id }),
      }),
    );
  }, [dispatch]);

  const handleClickPlayBtn = () => {
    dispatch(
      createOneSessionAction({
        testId: test.id,
        userId: localStorage.getItem('id'),
        roomId: id,
      }),
    );
    history.push('/play');
  };
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
          Created:
          {' '}
          <span style={{ marginLeft: '13px' }}>{creator.fullName}</span>
        </div>
      </div>
      <Button className="btn-start" onClick={handleClickPlayBtn}>
        Start quiz
      </Button>
    </EntranceContainerWrapper>
  );
}
