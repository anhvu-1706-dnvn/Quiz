import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
import { connect } from "react-redux";
import Wrapper from './styles'

class UserBadget extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { list } = this.props;
    return (
      <Wrapper>
        <Row>
          <Col>
            <Card title="Top played">
              <div className="badget">
                <div className="card-header">
                  <div className="card-stat-row">
                    <div className="card-stat">100 Quizzes</div>
                  </div>
                </div>
                <div className="content-wrapper">
                  <div className="name-wrapper">
                    Minh Hoang ho
                  </div>
                  <div className="image-wrapper">
                    <img src="https://img.icons8.com/fluent/48/000000/prize.png" />
                  </div>
                  
                
                </div>
              </div>
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
