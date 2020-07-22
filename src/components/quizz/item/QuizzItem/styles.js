import styled from 'styled-components';
import theme from '../../../../configs/theme';

export default styled.div`
  width: 700px;
  display: flex;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 40px;

  .content-wrapper {
    width: 100%;
    display: flex;
    padding: 15px;
    align-items: center;

    .image {
      width: 100px;
      height: 100px;
      border-radius: 4px;
      margin-right: 20px;
      background: ${theme.palette.boldestPrimary};
    }

    .icon {
      margin-right: 5px;
    }

    .avatar {
      color: red;
    }

    .amount-qs-text {
      font-size: 14px;
    }
  }

  .tag {
    height: fit-content;
    margin-top: 15px;
    margin-right: 15px;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
