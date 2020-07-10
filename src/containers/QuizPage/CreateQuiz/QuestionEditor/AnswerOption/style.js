import styled from 'styled-components';

export const Wrapper = styled.div`
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

    .correct {
      background-color: #00c985 !important;
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
`;
