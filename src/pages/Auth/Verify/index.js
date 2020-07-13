import React from 'react';
import VerifyForm from '../../../containers/Auth/Verify';
import PublicLayout from '../../../layout/PublicLayout/index';
import VerifyWrapper from '../styles';

export default function index() {
  return (
    <PublicLayout>
      <VerifyWrapper>
        <VerifyForm />
      </VerifyWrapper>
    </PublicLayout>
  );
}
