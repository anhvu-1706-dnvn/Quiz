import styled from 'styled-components';
import theme from '../../../configs/theme';

export const Wrapper = styled.div`
  padding-top: 10px;
  padding-left: 60px;
  overflow-y: auto;
  max-height: 100vh;
  position: fixed;

  &::-webkit-scrollbar {
    display: none;
  }
  .quiz-info-image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 80px;
    background-color: white;
    border-radius: 5px;
    width: 300px;
    cursor: pointer;
    .quiz-info-img {
      height: 100px;
      width: 150px;
      background-color: ${theme.palette.boldestPrimary};
    }
    .quiz-info-img-text {
      margin-top: 10px;
    }
    &:hover {
      background-color: ${theme.palette.lightestPrimary};
    }
  }
  .quiz-info-name-wrapper {
    margin-top: 10px;
    font-size: 30px;
    cursor: pointer;
    .quiz-info-name {
      margin-right: 10px;
    }
  }
  .quiz-info-brief-wrapper {
    display: flex;
    margin-top: 5px;

    .item {
      margin-right: 20px;
      font-size: 12px;
      color: ${theme.palette.primary};
      cursor: pointer;

      .icon {
        margin-right: 5px;
      }
    }
  }
  .quiz-info-detail-wrapper {
    margin-top: 30px;
    .item-description {
      display: flex;

      .icon-description {
        margin-top: 4px;
      }

      .description {
        max-width: 200px;
      }
    }
    .item {
      margin-bottom: 10px;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline !important;
      }

      .icon {
        margin-right: 8px;
      }
    }
  }

  .quiz-info-quality-score-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    label {
      margin-left: 0;
    }
    .title {
      font-size: 16px;
    }
    .quiz-quality-score-progress {
      width: 300px;
      margin-bottom: 10px;
    }
    .item-wrapper {
      span {
        font-size: 16px;
      }
      display: flex;
      flex-direction: column;
      .checkbox-item {
        margin-bottom: 15px;
      }

      .checkbox-item {
        .ant-checkbox-checked {
          background-color: #00c985 !important;

          .ant-checkbox-inner {
            background-color: #00c985 !important;
            border: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
        }
      }
    }
  }
`;
