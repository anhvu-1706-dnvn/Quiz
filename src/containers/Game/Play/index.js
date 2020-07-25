import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import AnswerButton from '../../../components/game/play/AnswerButton';
import RankCard from '../../../components/game/play/RankCard';
import { PlayGameContainerWrapper, RankingContainerWrapper } from '../styles';

export default function PlayGameContainer(props) {
  // return !props.isShowLeaderBoard ? (
  return false ? (
    <PlayGameContainerWrapper>
      <div className="title-section">
        {ReactHtmlParser(props.question && props.question.content)}
      </div>
      <div className="answer-section">
        {props.question &&
          props.question.answers.map((e, index) => (
            <AnswerButton
              content={ReactHtmlParser(e.content)}
              index={index + 1}
              onClick={() => props.handleChooseAnswer(index)}
              key={e.id}
            />
          ))}
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
