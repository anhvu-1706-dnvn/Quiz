import styled from 'styled-components';
import theme from '../../../configs/theme';

export default styled.div`
  .ant-table-tbody > tr > td {
    .rank-1 {
      font-weight: bold;
    }
    .rank-2 {
      font-weight: bold;
    }
    .rank-3 {
      font-weight: bold;
    }
    .trophy-icon {
      display: inline-block;
    }
  }
  .ant-table-thead > tr > th {
    background: ${theme.palette.boldPrimary};
    color: #fff;
    font-weight: bold;
    border-radius: 0 !important;

    &:hover {
      background: ${theme.palette.boldestPrimary} !important;
    }
  }
  .ant-card-body {
    padding: 0 !important;
  }
`;
