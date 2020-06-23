import React from 'react';
import { Tag } from 'antd';
import QuizzCard from '../../item/QuizzCard';
import { history } from '../../../../redux/store';
import theme from '../../../../configs/theme';
import Wrapper from './styles';

export default function QuizzList(props) {
  const handleClickSeeMoreBtn = () => {
    history.push(`/quizz/${props.nameList.replace(/\s/g, '-')}`);
  };
  return (
    <Wrapper>
      <div className="list-header">
        <span className="title">{props.nameList}</span>
        <Tag
          color={theme.palette.lightestPrimary}
          className="tag"
          onClick={handleClickSeeMoreBtn}
        >
          See more >
        </Tag>
      </div>
      <div className="list-content">
        <QuizzCard />
        <QuizzCard />
        <QuizzCard />
        <QuizzCard />
        <QuizzCard />
      </div>
    </Wrapper>
  );
}
