import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import QuizzCard from '../../item/QuizzCard';
import { history } from '../../../../redux/store';
import theme from '../../../../configs/theme';

import Wrapper from './styles';

export default function QuizzList(props) {
  return (
    <Wrapper>
      <div className="list-header">
        <span className="title">{props.nameList}</span>
        <Link
          className="btn-see-more"
          to={{
            pathname: `/quizz/${props.nameList.replace(/\s/g, '-')}`,
            state: props.id,
          }}
        >
          See more >
        </Link>
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
