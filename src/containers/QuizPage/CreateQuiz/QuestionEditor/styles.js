import styled from 'styled-components';

export const Wrapper = styled.div`
  .header {
    border-radius: 4px 4px 0 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .title-wrapper {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      margin-bottom: 20px;

      .question-type-select {
        height: 32px;
        border-radius: 4px;
        display: inline-block;
        position: relative;
      }
      .title {
        font-size: 14px;
        display: inline-block;
        line-height: 30px;
        margin-right: 16px;
      }
    }
    .question-score-wrapper {
      display: flex;
      justify-content: space-between;

      .score-input-wrapper {
        display: flex;
        align-items: center;
        width: 45%;
        justify-content: space-between;

        .score-input {
          width: 60% !important;
        }
      }
    }
  }

  .body {
    .question-text-editor {
      margin: 5px 0 10px 0;
    }
    .options {
      margin: 10px 0;
      .option {
        margin: 10px 0;
        flex-direction: row;
        display: flex;

        .option-state {
          width: 27px;
          height: 24px;
          display: inline-block;
          background-color: #cad2dc;
          color: #fff;
          line-height: 24px;
          text-align: center;
          border-radius: 50%;
          cursor: pointer;
          vertical-align: middle;
          margin-right: 12px;
          font-size: 16px;
          align-self: flex-end;
          margin-bottom: 7px;
        }
        .option-inner {
          width: 100%;
          margin-right: 13px;
          .quill {
            .ql-container {
              .ql-editor {
                padding: 5px 7px;
              }
            }
          }
        }

        .delete-option {
          align-self: flex-end;
          .ant-btn:hover {
            border: 1px solid #d9d9d9;
            color: #dd4b39;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;

    .select {
      width: 26% !important;
    }

    .btn-area {
      width: 36%;
      display: flex;
      justify-content: space-between;
    }
  }
`;
