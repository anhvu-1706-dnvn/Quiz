/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { PulseLoader } from 'react-spinners';
import theme from '../../configs/theme';
import QuizzCard from '../../components/quizz/item/QuizzCard';
import { getOneTagAction } from '../../redux/tag/action';
import { history } from '../../redux/store';
import Wrapper from './styles';

export default function QuizzesByTag(props) {
  const dispatch = useDispatch();
  const tagState = useSelector((state) => state.tag.currentTag);
  useEffect(() => {
    dispatch(getOneTagAction(props.location.state));
  }, [dispatch]);

  const handleGenerateListCard = () => {
    const result = [];
    const limit = 5;
    let offset = 0;
    while (limit * (offset + 1) <= Math.ceil(tagState.tests.length / 5) * 5) {
      const testPerRow = [
        ...tagState.tests.slice(limit * offset, limit * (offset + 1)),
      ];
      result.push(
        <div className="list-card-row" key={offset}>
          {testPerRow.map((e) => (
            <QuizzCard name={e.name} key={e.id} imageUrl={e.image} />
          ))}
        </div>
      );
      offset += 1;
    }
    return result;
  };
  return (
    <Wrapper>
      <div className="quizz-tag-header">
        <img
          src="https://picsum.photos/200/300"
          alt="quizz-img"
          className="tag-img"
        />
        <div className="path-wrapper">
          <div className="title">Popular Quizzes</div>
          <div className="path">
            <span className="path-home" onClick={() => history.push('/')}>
              Home
            </span>
            <RightOutlined />
            <div className="name-tag">
              {props.match.params.tagName.replace(/-/g, ' ')}
            </div>
          </div>
        </div>
      </div>
      {tagState.loading ? (
        <div className="loading-container">
          <PulseLoader
            color={theme.palette.primary}
            size={30}
            loading={tagState.loading}
          />
        </div>
      ) : (
        <div className="list-card-container">
          {Object.keys(tagState).length > 0 && handleGenerateListCard()}
          <Button>Load More</Button>
        </div>
      )}
    </Wrapper>
  );
}
