import styled from 'styled-components';

export default styled.div`
  .title {
    margin: 15px 0 40px;
    & span {
      font-size: 24px;
      font-weight: 300;
      line-height: 1;
      text-transform: uppercase;
      color: #788195;
    }
  }

  .sub-action-div {
    display: flex;
    justify-content: space-between;
    margin: 12px 0px 0px 0px;
  }

  .action-div {
    margin-top: 20px;
    & button {
      width: 100%;
    }
  }
  .register-form-button {
    margin-top: 10px;
  }
`;
