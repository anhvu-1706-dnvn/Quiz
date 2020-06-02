import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 10px;
  padding-left: 60px;
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
    }
    .quiz-info-img-text {
      margin-top: 10px;
    }
    &:hover {
      background-color: #fff0f0;
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
      .icon {
        margin-right: 5px;
      }
    }
  }
  .quiz-info-detail-wrapper {
    margin-top: 30px;
    .item {
      margin-bottom: 10px;
      font-size: 16px;
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
    }
  }
`;
