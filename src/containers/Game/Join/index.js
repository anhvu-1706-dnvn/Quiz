import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from 'antd';
import QuizzList from '../../../components/quizz/find_quizz/QuizzList';
import { getListTagWithTestAction } from '../../../redux/tag/action';
import { history } from '../../../redux/store';
import { JoinGameContainerWrapper } from '../styles';

export default function JoinGameContainer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tag);
  useEffect(() => {
    dispatch(getListTagWithTestAction());
  }, [dispatch]);

  return (
    <JoinGameContainerWrapper>
      <div className="enter-code-section">
        <div className="input-code-wrapper">
          <Input
            placeholder="Enter a game code"
            enterButton="Join"
            className="input-code"
          />
          <Button className="btn-join" onClick={() => history.push('/play')}>
            Join
          </Button>
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
