import styled from 'styled-components';

export default styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;

  .question-detail-header {
    background-color: #f7f6f6;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .question-type-icon {
      width: 26px;
      height: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      border-radius: 4px;
      margin-right: 8px;
      font-size: 14px;

      background-color: rgba(184, 51, 106, 0.1);
      color: #b8336a;
    }

    .title {
      font-size: 16px;
      display: inline-block;
      line-height: 26px;
      vertical-align: middle;
      margin: 0;
    }

    .btn-bar {
      margin-left: auto;

      .icon {
        margin-right: 5px;
      }

      button {
        background-color: #fff;
        padding: 6px 8px;
        border: 1px solid #dfdfdf;
        border-radius: 4px;
        font-size: 14px;
        color: #393a68;
        margin-left: 8px;
        cursor: pointer;
        outline: none;

        &:hover {
          background-color: #f2f2f2;
        }
      }
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
    }
  }

  .question-detail-footer {
    background-color: #f6f4f5;
    color: #393a68;
    border-radius: 0 0 4px 4px;

    .select {
      margin: 12px;
      width: 100px;
      background-color: #fff !important;
      color: #000 !important;
      position: static !important;
    }
  }
`;
