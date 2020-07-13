import styled from 'styled-components';
import theme from '../../configs/theme';

export default styled.div`
  .title {
    margin: 0 auto !important;
    display: flex;
    width: 200px;
    img {
      width: 100%;
    }
  }

  .action-link {
    display: flex;
    color: rgba(0, 0, 0, 0.65);

    .sign-up-link {
      color: ${theme.palette.primary} !important;
      margin-left: 5px !important;
      font-weight: bold !important;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
