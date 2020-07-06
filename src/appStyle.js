import styled from 'styled-components';

const AppWrapper = styled.div`
  .anticon:before {
    display: block;
    font-family: 'anticon', 'TCRM' !important;
  }
  .anticon:after {
    display: block;
    font-family: 'anticon', 'TCRM' !important;
  }
  .gradientBackground {
    background-image: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.palette.lightPrimary}, ${theme.palette.primary})`};
  }
  .ant-input:focus,
  .ant-input:hover {
    border-color: ${({ theme }) => `${theme.palette.lightPrimary} !important`};
  }
  .ant-table-tbody > tr > td {
    border-bottom: 1px solid ${({ theme }) => theme.background.container};
    color: ${({ theme }) => theme.palette.color[0]};
  }
  .ant-layout-footer {
    background: #ffffff;
  }

  .ant-menu-item-selected {
    background-color: ${({ theme }) =>
      theme.palette.lightestPrimary} !important;
  }

  .ant-btn-primary {
    background-color: ${({ theme }) => theme.palette.primary} !important;
    border-color: ${({ theme }) => theme.palette.primary} !important;
  }

  // .ant-select-selection {
  //   &:hover {
  //     border-color: ${({ theme }) => theme.palette.lightPrimary} !important;
  //   }
  //   &:focus {
  //     border-color: ${({ theme }) => theme.palette.lightPrimary} !important;
  //   }
  //   &:active {
  //     border-color: ${({ theme }) => theme.palette.lightPrimary} !important;
  //   }
  }
`;

export default AppWrapper;
