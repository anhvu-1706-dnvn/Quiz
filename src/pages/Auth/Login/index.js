import React from 'react';
import PublicLayout from '../../../layout/PublicLayout/index';
import LoginForm from '../../../containers/Auth/Login';
import LoginWrapper from '../styles';

export default function Login() {
  return (
    <PublicLayout>
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </PublicLayout>
  );
}
