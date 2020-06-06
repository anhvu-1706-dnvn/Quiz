import styled from 'styled-components';

export default styled.div`
  .option-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-title {
      font-size: 40px;
      padding: 12px;
      color: #393a68;
      display: inline-block;
      margin-bottom: 20px;
    }

    .search-bar {
      width: 700px;
      height: 60px;
      background-color: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      border: none;
      outline: none;
      background: none;
      font-size: 24px;
      font-weight: lighter;
      color: #292a3a;
      background-color: #fff;
      border-radius: 4px;
      transition: 0.2s all ease-in-out;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);

      input {
        font-size: 24px;
      }
    }
  }
`;
