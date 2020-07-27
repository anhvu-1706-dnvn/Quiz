import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import trophy_1st from '../../../../assets/icons/trophy_1st.svg';
import Wrapper from './styles';
import * as UserAction from '../../../../redux/user/actions';

class UserBadget extends Component {
  constructor(props) {
    super(props);
    const { topContributes } = this.props;
    if (topContributes === null) {
      this.props.retrieveUserContributes();
    }
  }

  handleClick = () => {};

  render() {
    const { topContributes } = this.props;
    let data = [];
    if (topContributes) {
      const { contributers } = topContributes;
      if (contributers.length > 3) {
        data = contributers.slice(0, 3);
      } else {
        data = [...contributers];
      }
      data = data.map((e) => ({ ...e, total: e.totalTest, key: e.id }));
    }
    const badgets = data.map((e, idx) => (
      <div className={`badget badget-${idx}`}>
        <div className="card-header">
          <div className="card-stat-row">
            <div className="card-stat">{` ${e.total} Quizzes`}</div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="name-wrapper">{` ${e.fullName}`}</div>
          <div className="image-wrapper">
            <img
              src="https://img.icons8.com/fluent/48/000000/prize.png"
              alt=""
            />
          </div>
        </div>
      </div>
    ));
    return (
      <Wrapper>
        <Row>
          <Col>
            <Card title="Top contributes">{badgets}</Card>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  const { topContributes } = user;
  return {
    topContributes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  retrieveUserContributes: () => {
    dispatch(UserAction.getTopContributeAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBadget);
