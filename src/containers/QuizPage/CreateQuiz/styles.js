import styled from 'styled-components';

export const Wrapper = styled.div`
  .question-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 64px;
    box-sizing: border-box;
    postion: relative;

    .questions-header-inner {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 64px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      padding: 0 16px;
      box-sizing: border-box;
      position: absolute;
      top: 0px;

      .editor-title {
        font-size: 16px;
        font-weight: bold;
        color: #292a3a;
        margin-right: auto;
      }

      .new-question,
      .save-draft {
        font-size: 16px;
        color: #8854c0;
        border-radius: 4px;
        background-color: transparent;
        cursor: pointer;
        border: none;
        outline: none;
        padding: 6px 8px;
      }
    }
  }
  .questions-body {
    .questionType-panel {
      display: flex;
      justify-content: center;
      flex-flow: wrap;
      padding: 20px 0;
      }
    }
  }
`;
