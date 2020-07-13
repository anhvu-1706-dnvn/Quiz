import React from 'react';
import RegisterForm from '../../../containers/Auth/Register';
import PublicLayout from '../../../layout/PublicLayout/index';
import RegisterWrapper from '../styles';

export default function Register() {
  return (
    <PublicLayout>
      <RegisterWrapper>
        <RegisterForm />
      </RegisterWrapper>
    </PublicLayout>
  );
}
