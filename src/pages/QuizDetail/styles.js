import styled from 'styled-components';
import theme from '../../configs/theme';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .main-infor-container {
    background-color: #fff;
    border-radius: 4px;
    padding: 16px;
    margin: 16px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    width: 650px;

    .avatar {
      background: ${theme.palette.boldestPrimary};
      border-radius: 6px;
      width: 125px;
      height: 125px;
      margin-right: 30px;
    }

    .infor {
      width: 100%;

      .name {
        font-size: 24px;
        color: #292a3a;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .status {
          text-transform: uppercase;
        }
      }

      .tag-wrapper {
        display: flex;
        margin-top: 15px;

        .tag {
          margin-right: 20px;

          .icon {
            margin-right: 6px;
          }
        }
      }
    }

    .description {
      margin-top: 15px;
      width: 400px;

      .icon {
        margin-right: 6px;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    width: 654px;
    margin-top: 30px;

    .main-action {
      display: flex;
      align-items: center;
    }
    .btn-action {
      background-color: ${theme.palette.primary};
      color: #fff;
      font-size: 20px;
      display: flex;
      align-items: center;
      padding: 20px;
      width: 150px;
      border-radius: 8px;
      margin-right: 15px;

      span {
        margin-bottom: 3px;
      }

      &:hover {
        background-color: ${theme.palette.boldPrimary};
      }
    }

    .btn-delete {
      background-color: #f50;
      margin-right: 0;

      &:hover {
        background-color: #de4a00;
      }
    }
  }

  .question-container {
    width: 652px;
    margin-top: 30px;

    .title-preview {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
`;
