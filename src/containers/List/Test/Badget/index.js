import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
import { connect } from "react-redux";
import Wrapper from './styles'
import * as UserAction from '../../../../redux/user/actions'

class UserBadget extends Component {
  constructor(props) {
    super(props)
    const {topContributes} = this.props;
    if(topContributes === null) {
      this.props.retrieveUserContributes()
    }
  }

  render() {
    const {topContributes} = this.props;
    let data = []
    if(topContributes) {
      const {players} = topContributes
      if(players.length > 3) {
        data=players.slice(0,3)
      } else {
        data = [...players]
      }
      data = data.map(e=> ({...e, total: e.totalTestPlayed, key: e.id}))
    }
    const badgets = data.map((e, idx)=> (
      <div className={`badget badget-${idx}`}>
        <div className="card-header">
          <div className="card-stat-row">
            <div className="card-stat">{` ${e.total} Games`}</div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="name-wrapper">
            {` ${e.fullName}`}
          </div>
          <div className="image-wrapper">
            <img src="https://img.icons8.com/fluent/48/000000/prize.png" alt="" />
          </div>
        </div>
      </div>
    ))
    return (
      <Wrapper>
        <Row>
          <Col>
            <Card title="Top played">
              {badgets}
            </Card>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  const {topContributes} = user
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
