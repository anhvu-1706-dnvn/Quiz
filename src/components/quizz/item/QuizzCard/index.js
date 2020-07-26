import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
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

  const [visible, setVisible] = useState(false);

  const handleCancelModal = () => {
    setVisible(false);
  };

  return props.isInJoinPage ? (
    // <Wrapper onClick={() => setVisible(true)}>
    <Wrapper>
      <Modal
        visible={visible}
        onCancel={handleCancelModal}
        footer={null}
        centered
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
