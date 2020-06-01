import styled from "styled-components";

export default styled.div`
  background: ${({ theme }) => theme.background.container};

  label {
    margin-bottom: 5px;
  }
  .quill {
    background: ${({ theme }) => theme.background.content};
    display: flex;
    flex-direction: column;
    .ql-snow {
      border: 1px solid #d9d9d9;
    }
    .ql-toolbar {
      margin-right: 20px;
      width: 270px;
      align-self: flex-end;
      padding: 0;
      display: flex;
      background-color: #fff;
      box-shadow: 0 -1px 1px rgba(0,0,0,0.05);
      font-size: 14px;
      border-radius: 4px 4px 0 0;
      z-index: 1;
      height: 28px;
      padding: 0 4px;
      border: 1px solid #e0e0e0;
      border-bottom: none;
      transition: 0.3s all ease-in-out;
      color: #393A68;
      display:none;
      .ql-formats {
        margin: 0 3px;
      }
    }
   
    .ql-container {
      border: 1px solid #ededed !important;
      font-size: 14px;
      border-radius: 4px;
      font-size: 16px;
      font-family: OpenSans;
      display: inline-block;
    }
  }
  .focus {
    .ql-container {
      box-shadow: 0 0 5px rgba(0,0,0,0.1), 0 6px 8px rgba(0,0,0,0.1);
    }
    .ql-toolbar {
      display: block;
    }
  }
`;
