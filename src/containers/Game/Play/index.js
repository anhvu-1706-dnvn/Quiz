import React, { useState, useEffect } from 'react';
import AnswerButton from '../../../components/game/play/AnswerButton';
import RankCard from '../../../components/game/play/RankCard';
import { PlayGameContainerWrapper, RankingContainerWrapper } from '../styles';

export default function PlayGameContainer(props) {
  // const [isShowLeaderBoard, setIsShowLeaderBoard] = useState(false);

  // useEffect(() => {
  //   if (isShowLeaderBoard) {
  //     setTimeout(() => {
  //       setIsShowLeaderBoard(false);
  //     }, 10000);
  //   }
  // });

  // const handleChooseAnswer = (id) => {
  //   if (id === 1) setIsShowLeaderBoard(true);
  // };

  return !props.isShowLeaderBoard ? (
    <PlayGameContainerWrapper>
      <div className="title-section">What is your name ?</div>
      <div className="answer-section">
        <AnswerButton
          content="Peter"
          backgroundColor="#2C9CA6"
          onClick={() => props.handleChooseAnswer(1)}
        />
        <AnswerButton
          content="Jame"
          backgroundColor="#ECA82C"
          onClick={() => props.handleChooseAnswer(2)}
        />
        <AnswerButton
          content="David"
          backgroundColor="#D4546A"
          onClick={() => props.handleChooseAnswer(3)}
        />
        <AnswerButton
          content="Jack"
          backgroundColor="#461A42"
          onClick={() => props.handleChooseAnswer(4)}
        />
      </div>
    </PlayGameContainerWrapper>
  ) : (
    <RankingContainerWrapper>
      <div className="rank-section">
        <div className="header-rank-table">
          <p className="first-title">Rank</p>
          <p className="second-title">Name</p>
          <p className="third-title">Score</p>
        </div>
        <div className="content-rank-table">
          <RankCard rank="1" name="Pusher" score="7000" />
          <RankCard rank="2" name="Kickstart" score="6900" />
          <div className="divider" />
          <div className="divider" />
          <div className="divider" />
          <div className="divider" />
          <RankCard rank="17" name="Junkie" score="3200" />
          <RankCard rank="18" name="Squatch" score="1600" />
          <RankCard rank="19" name="Hieu Nguyen" score="1500" active />
        </div>
      </div>
    </RankingContainerWrapper>
  );
}
