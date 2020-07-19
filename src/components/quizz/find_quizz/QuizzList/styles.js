import styled from 'styled-components';
import theme from '../../../../configs/theme';

export default styled.div`
  margin-top: 40px;

  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    max-width: 1071px;
    margin: 0 auto 8px;

    .title {
      font-size: 24px;
      color: #292a3a;
      font-weight: 600;
    }

    .btn-see-more {
      height: fit-content;
      font-size: 16px;
      padding: 5px 20px;
      font-weight: 600;
      cursor: pointer;
      margin: 0;
      color: ${theme.palette.primary};
      border: 1px solid ${theme.palette.primary};
      background-color: ${theme.palette.lightestPrimary};
      border-radius: 4px;

      &:hover {
        background-color: ${theme.palette.lightPrimary} !important;
      }
    }
  }

  .list-content {
    display: flex;
    align-items: center;
    max-width: 1071px;
    padding: 8px 0 16px;
    overflow-x: scroll;
    margin: 0 auto 24px;
  }

  .list-content::-webkit-scrollbar {
    display: none;
  }
`;
