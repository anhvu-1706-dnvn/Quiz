import styled from 'styled-components';
import theme from '../../configs/theme';

export default styled.div`
  display: flex;
  justify-content: center;
  max-width: 1071px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .quizz-tag-header {
    width: 100%;
    background-color: ${theme.palette.primary};
    height: 100px;
    border-radius: 4px;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height: 96px;
    padding: 10px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    .tag-img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .path-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
    }
    .title {
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      opacity: 0.66;
    }
    .path {
      display: flex;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      align-items: center;
      .path-home {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .list-card-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .list-card-row {
      display: flex;
      width: 100%;
      margin-bottom: 40px;
      // justify-content: space-between;
      // div {
      //   margin-right: 0;
      // }
    }
  }
`;
