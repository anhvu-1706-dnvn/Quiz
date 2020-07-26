import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '../../../plugins/socket';
import { updateListUserAction } from '../../../redux/room/actions';
import RankCard from '../../../components/game/play/RankCard';
import { LeaderBoardContainerWrapper } from '../styles';

export default function LeaderBoardContainer() {
  const dispatch = useDispatch();
  const role = localStorage.getItem('role');
  const roomState = useSelector((state) => state.room);
  useEffect(() => {
    if (role === 'creator') {
      socket.on('submitAnswer', (data) => {
        dispatch(updateListUserAction({ data }));
      });

      socket.off('userLeave');
    }
  }, []);

  return (
    <LeaderBoardContainerWrapper>
      <div className="rank-section">
        <div className="header-rank-table">
          <p className="first-title">Rank</p>
          <p className="second-title">Name</p>
          <p className="third-title">Score</p>
        </div>
        <div className="content-rank-table">
          {roomState.users.length > 0 &&
            roomState.users.map((e, index) => (
              <RankCard
                key={e.userId}
                rank={index + 1}
                name={e.fullName}
                score={e.totalScore}
              />
            ))}
        </div>
      </div>
    </LeaderBoardContainerWrapper>
  );
}
