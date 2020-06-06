import styled from 'styled-components';

export default styled.div`
  margin-top: 40px;

  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .title {
      font-size: 24px;
      color: #292a3a;
      font-weight: 600;
    }

    .tag {
      height: fit-content;
      font-size: 16px;
      padding: 5px 20px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        background-color: #ffdcd9;
      }
    }
  }

  .list-content {
    display: flex;
    align-items: center;
    max-width: 1118px;
    padding: 8px 0 16px;
    overflow-x: scroll;
    margin: 0 auto 24px;
  }

  .list-content::-webkit-scrollbar {
    display: none;
  }
`;
