import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import PublicLayoutWrapper from './styles';
import Background from '../../assets/images/background.jpg';

const PublicLayout = ({ children }) => (
  <PublicLayoutWrapper>
    <Layout
      className="layout main-img"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="overlay">
        <div className="main-content">{children}</div>
      </div>
    </Layout>
  </PublicLayoutWrapper>
);

PublicLayout.propTypes = {
  children: PropTypes.any,
};

export default PublicLayout;
