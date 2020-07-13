import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Input } from 'antd';
import i18n from 'i18next';
import Wrapper from '../styles';
import logo from '../../../assets/images/logoFull.png';

export default function Verify() {
  const dispatch = useDispatch();
  const registerStatus = useSelector((state) => state.user.registerSuccess);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const phoneNumber = useSelector((state) => state.user.phoneRegister);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (!registerStatus) {
    return <Redirect to="/login" />;
  }
  return (
    <Wrapper>
      <div className="title">
        <img alt="#" src={logo} />
      </div>
      <br />
      <div>We have send verification code to your phone</div>
      <div>Please check and confirm it within 5 minutes</div>
      <br />
      <Input placeholder="Your code" style={{ marginBottom: '25px' }} />
      <div className="action-div">
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          // loading={this.props.isLoading}
        >
          {i18n.t('verify.verifyBtn')}
        </Button>
      </div>
    </Wrapper>
  );
}
