import styled from 'styled-components';

export default styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  border-radius: 4px;

  span {
    color: black;
  }

  .title {
    display: flex;
    align-items: center;
    padding: 20px;
    border-right: 1px solid #cdcdcd;
    color: black;
  }

  .order-container {
    padding: 20px 30px;
  }

  .order-select {
    margin-left: 20px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
    width: 130px;
    border-radius: 4px;
  }
`;
