import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { socket } from '../../../plugins/socket';
import { history } from '../../../redux/store';
import UserCard from '../../../components/game/entrance/UserCard';
import { getListQuestionByTestAction } from '../../../redux/question/actions';
import { createOneSessionAction } from '../../../redux/session/actions';
import { addUserAction, removeUserAction } from '../../../redux/room/actions';
import { getOneTestAction } from '../../../redux/test/actions';
import { EntranceContainerWrapper } from '../styles';

export default function EntranceContainer(props) {
  const dispatch = useDispatch();
  const role = localStorage.getItem('role');
  const roomState = useSelector((state) => state.room);
  const test = useSelector((state) => state.test.currentTest);

  useEffect(() => {
    dispatch(getOneTestAction(roomState.currentRoom.testId));
    dispatch(
      getListQuestionByTestAction({
        orderBy: 'id',
        filter: JSON.stringify({ testId: roomState.currentRoom.testId }),
      })
    );
  }, [dispatch]);

  useEffect(() => {
    // Join Room
    socket.emit('joinRoom', {
      roomId: roomState.currentRoom.id,
      userId: Number(localStorage.getItem('id')),
      fullName: localStorage.getItem('fullName'),
    });

    if (role === 'creator') {
      // Get user joined event => Add user
      socket.on('userJoin', (data) => {
        dispatch(addUserAction({ data }));
      });

      // Get user leaved event => Remove user
      socket.on('userLeave', (data) => {
        dispatch(removeUserAction({ data }));
      });
    }

    // Get host start game event => Create session + play
    if (role === 'participant') {
      socket.on('createSession', (data) => {
        if (data) {
          dispatch(
            createOneSessionAction({
              testId: roomState.currentRoom.testId,
              userId: localStorage.getItem('id'),
              roomId: roomState.currentRoom.id,
            })
          );
          history.push('/play');
        }
      });
    }
  }, []);

  const handleClickPlayBtn = () => {
    socket.emit('startGame', roomState.currentRoom.id);
    history.push('/leader-board');
  };

  return role === 'creator' ? (
    <EntranceContainerWrapper>
      <div className="code-section">
        Invite your friends to the test by this code:
        <span>{roomState.currentRoomCode}</span>
      </div>
      <div className="quiz-infor-section">
        <div className="header">
          <div className="title">
            <img src={test && test.image} className="test-image" alt="avatar" />
            <div className="infor">
              <span className="name">{test && test.name}</span>
              <span className="total-question">{props.total} questions</span>
            </div>
          </div>
          <div className="btn-section">
            <Button
              className="entrance-btn btn-start"
              onClick={handleClickPlayBtn}
            >
              Start quiz
            </Button>
            <Button
              className="entrance-btn btn-exit"
              onClick={() => props.handleClickExitBtn()}
            >
              Exit
            </Button>
          </div>
        </div>
      </div>
      {roomState.users.length > 0 && (
        <div className="user-section">
          {roomState.users.map((e) => (
            <UserCard image={test && test.image} name={e.fullName} />
          ))}
        </div>
      )}
    </EntranceContainerWrapper>
  ) : (
    <EntranceContainerWrapper>
      <div className="code-section">
        The host will start the test in a few minutes. Please wait!!!
      </div>
      <div className="quiz-infor-section">
        <div className="header">
          <div className="title">
            <img src={test && test.image} className="test-image" alt="avatar" />
            <div className="infor">
              <span className="name">{test && test.name}</span>
              <span className="total-question">{props.total} questions</span>
            </div>
          </div>
          <div className="user-infor">
            <UserCard
              image={test && test.image}
              name={localStorage.getItem('fullName')}
            />
          </div>
        </div>
      </div>
    </EntranceContainerWrapper>
  );
}
