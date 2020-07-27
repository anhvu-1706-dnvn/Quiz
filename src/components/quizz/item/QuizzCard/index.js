import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Icon } from 'antd';
import { history } from '../../../../redux/store';
import { getOneTestAction } from '../../../../redux/test/actions';
import { getListQuestionByTestAction } from '../../../../redux/question/actions';
import Wrapper from './styles';

export default function QuizzCard(props) {
  const dispatch = useDispatch();
  const handleClickCard = async () => {
    await dispatch(getOneTestAction(props.id));
    await dispatch(
      getListQuestionByTestAction({
        filter: JSON.stringify({ testId: props.id }),
      })
    );
    history.push('/quiz');
  };

  const testState = useSelector((state) => state.test);
  const questionState = useSelector((state) => state.question);

  const [visible, setVisible] = useState(false);

  const handleCancelModal = () => {
    setVisible(false);
  };

  const handleClickCardModal = () => {
    setVisible(true);
    dispatch(getOneTestAction(props.id));
    dispatch(
      getListQuestionByTestAction({
        filter: JSON.stringify({ testId: props.id }),
      })
    );
  };

  return props.isInJoinPage ? (
    <Wrapper onClick={handleClickCardModal}>
      <Modal visible={visible} onCancel={handleCancelModal} footer={null}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '30px',
          }}
        >
          <img
            src={props.imageUrl}
            alt="quizz-img"
            style={{ width: '470px' }}
          />
          <span
            style={{ fontSize: '24px', fontWeight: '700', marginTop: '10px' }}
          >
            {props.name}
          </span>
        </div>
        <div style={{ marginTop: '10px' }}>
          <div style={{ display: 'flex' }}>
            {testState.currentTest &&
              testState.currentTest.tags.map((e) => (
                <div style={{ marginRight: '20px' }}>
                  <Icon type="tag" style={{ marginRight: '5px' }} />
                  {e.name}
                </div>
              ))}
          </div>
          {testState.currentTest &&
            testState.currentTest.description !== null && (
              <div style={{ fontSize: '16px', marginTop: '10px' }}>
                {`Description: ${
                  testState.currentTest && testState.currentTest.description
                }`}
              </div>
            )}

          <div
            style={{ fontSize: '16px', marginTop: '10px' }}
          >{`Total: ${questionState.total} questions`}</div>
        </div>
      </Modal>
      <div className="card-header">
        <img src={props.imageUrl} alt="quizz-img" className="quizz-img" />
        {/* <div className="card-stat-row">
          <div className="card-stat">10 Qs</div>
          <div className="card-stat">3.7k plays</div>
        </div> */}
      </div>
      <div className="content-wrapper">{props.name}</div>
    </Wrapper>
  ) : (
    <Wrapper onClick={handleClickCard}>
      <div className="card-header">
        <img src={props.imageUrl} alt="quizz-img" className="quizz-img" />
        {/* <div className="card-stat-row">
          <div className="card-stat">10 Qs</div>
          <div className="card-stat">3.7k plays</div>
        </div> */}
      </div>
      <div className="content-wrapper">{props.name}</div>
    </Wrapper>
  );
}
