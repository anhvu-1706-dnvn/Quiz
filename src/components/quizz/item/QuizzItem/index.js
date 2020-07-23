import React from 'react';
import { CaretRightOutlined, CopyrightCircleFilled } from '@ant-design/icons';
import { Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { getOneTestAction } from '../../../../redux/test/actions';
import { getListQuestionByTestAction } from '../../../../redux/question/actions';
import { getListRoomAction } from '../../../../redux/room/actions';
import { history } from '../../../../redux/store';

import Wrapper from './styles';

export default function QuizzBar(props) {
  const dispatch = useDispatch();
  const name = localStorage.getItem('fullName');

  const handleClickTest = async () => {
    dispatch(getOneTestAction(props.id));
    dispatch(
      getListQuestionByTestAction({
        limit: 50,
        offset: 0,
        filter: JSON.stringify({ testId: props.id }),
        orderBy: 'id',
      }),
    );
    dispatch(
      getListRoomAction({ filter: JSON.stringify({ testId: props.id }) }),
    );
    history.push('/my-quizzes/quiz');
  };

  return (
    <Wrapper onClick={handleClickTest}>
      <div className="content-wrapper">
        <img src={props.imageUrl} alt="quizz-img" className="image" />
        <div>
          <h2>
            {props.name}
            {/* <span className="amount-qs-text"> (1 Qs)</span> */}
          </h2>
          <h4>
            <CaretRightOutlined className="icon" />
            Played 0 times
          </h4>
          <h4>
            <CopyrightCircleFilled className="icon avatar" />
            Created by 
            {' '}
            {name}
          </h4>
        </div>
      </div>
      {/* {props.isPublic ? (
        <Tag color="#00c985" className="tag">
          Public
        </Tag>
      ) : (
        <Tag color="#f50" className="tag">
          Private
        </Tag>
      )} */}
    </Wrapper>
  );
}
