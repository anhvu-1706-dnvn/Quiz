import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
import { connect } from "react-redux";
import Wrapper from './styles'

class UserBadget extends Component {
  // constructor(props) {
  //   super(props)
  
  // }

  handleClick = () => {
    
  }

  render() {
    const data = [
      {
        id:1,
        fullName: 'Minh Hoang Ho',
        total: 20,
      },
      {
        id:1,
        fullName: 'Minh Hoang Ho',
        total: 20,
      },
      {
        id:1,
        fullName: 'Minh Hoang Ho',
        total: 20,
      },
    ]
    const badgets = data.map(e=> (
      <div className="badget">
        <div className="card-header">
          <div className="card-stat-row">
            <div className="card-stat">{` ${e.total} Quizzes`}</div>
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
            <Card title="Top contribution">
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
  const {list} = user
  return {
    list,
  };
};



export default connect(mapStateToProps, {})(UserBadget);
