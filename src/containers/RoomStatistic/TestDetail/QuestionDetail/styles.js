import styled from 'styled-components';

export default styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;
  .question-detail-header {
    background-color: #f1f2f6;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .title {
      font-size: 16px;
      display: inline-block;
      line-height: 26px;
      vertical-align: middle;
      margin: 0;
    }
    .counter-correct-answer {
      margin-left: 40px;
      font-weight: bold;
    }
  }
  .question-detail-body {
    color: #393a68;
    font-size: 14px;
    overflow: hidden;

    .wrapper {
      display: inline-block;
      width: 100%;
      padding: 12px;
      box-sizing: border-box;

      .query {
        font-size: 16px;
      }

      span {
        font-size: 12px;
        padding-bottom: 4px;
        color: #6b7c93;
      }
      .item {
        width: 100%;
      }
    }
  }
`;
