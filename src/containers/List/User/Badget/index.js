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
            <Card title="Top contribution">
              <div className="badget">
                <div className="name-area"> Minh Hoang Ho</div>
                <div className="number-area"> 20</div>
               
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
