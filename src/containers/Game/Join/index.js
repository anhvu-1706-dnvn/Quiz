import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from 'antd';
import QuizzList from '../../../components/quizz/find_quizz/QuizzList';
import { history } from '../../../redux/store';
import { getListTagWithTestAction } from '../../../redux/tag/action';

import {
  setCurrentRoomCode,
  checkRoomAction,
} from '../../../redux/room/actions';

import { JoinGameContainerWrapper } from '../styles';

export default function JoinGameContainer() {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  const data = useSelector((state) => state.tag);

  useEffect(() => {
    dispatch(getListTagWithTestAction());
  }, [dispatch]);

  const handleChangeCode = (e) => {
    setCode(e.target.value);
  };

  const handleClickJoinBtn = () => {
    dispatch(setCurrentRoomCode({ code }));
    dispatch(checkRoomAction({ code }));
    history.push('/entrance');
  };

  return (
    <JoinGameContainerWrapper>
      <div className="enter-code-section">
        <div className="input-code-wrapper">
          <Input
            placeholder="Enter a game code"
            className="input-code"
            onChange={handleChangeCode}
          />
          <Button className="btn-join" onClick={() => handleClickJoinBtn()}>
            Join
          </Button>
        </div>
      </div>
      <div className="list-quizzes-section">
        {data.tags.length > 0 &&
          data.tags.map((e) => (
            <QuizzList
              key={e.id}
              id={e.id}
              nameList={e.name}
              test={e.test}
              hideBtnSeeMore
            />
          ))}
      </div>
    </JoinGameContainerWrapper>
  );
}
