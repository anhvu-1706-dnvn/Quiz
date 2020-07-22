import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import { Input, Button } from 'antd';
import QuizzList from '../../../components/quizz/find_quizz/QuizzList';
import { getListTagWithTestAction } from '../../../redux/tag/action';
import { history } from '../../../redux/store';
import { JoinGameContainerWrapper } from '../styles';

// const socket = io('http://02b58e6b5a3d.ngrok.io/room');

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
    console.log('abcd');
    //socket.emit('joinRoom', code);
    // history.push('/entrance');
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
          <Link
            className="btn-join"
            to={{
              pathname: '/entrance',
              state: {
                code,
              },
            }}
            onClick={() => handleClickJoinBtn()}
          >
            Join
          </Link>
          {/* <Button className="btn-join" onClick={handleClickJoinBtn}>
            Join
          </Button> */}
        </div>
      </div>
      <div className="list-quizzes-section">
        {data.tags.length > 0 &&
          data.tags.map((e) => (
            <QuizzList key={e.id} id={e.id} nameList={e.name} test={e.test} />
          ))}
      </div>
    </JoinGameContainerWrapper>
  );
}
