import styled from 'styled-components';
// import theme from '../../configs/theme';

export default styled.div`
  width: 700px;
  .container {
    color: #fff;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-size: 20px;
    background: hsla(0, 0%, 100%, 0.15);
    padding: 12px 20px;
    border-radius: 8px;
    margin-bottom: 5px;
    font-weight: 500;
  }

  .active {
    transform: scale(1.1);
    background-color: #fff;
    color: #000;
    margin-top: 10px;
  }

  .left-section {
    display: flex;
    width: 700px;
    align-items: center;

    .infor {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 120px;

      .avatar {
        width: 34px;
        border-radius: 50%;
        margin-right: 25px;
      }
    }
  }

  .right-section {
    width: 40%;
    display: flex;
    justify-content: flex-end;
  }
`;
