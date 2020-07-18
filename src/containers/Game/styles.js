import styled from 'styled-components';
import theme from '../../configs/theme';

export const JoinGameContainerWrapper = styled.div`
  margin-top: 30px;
  width: 1071px;

  .enter-code-section {
    background-color: #fff;
    max-width: 1071px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    .input-code-wrapper {
      padding: 4px;
      border: 2px solid #a4a4a4;
      border-radius: 8px;
      display: flex;

      .input-code {
        width: 400px;
        height: 60px;
        font-size: 20px;
        color: #000;
      }

      .btn-join {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.palette.primary};
        color: white;
        border: none;
        margin-left: 4px;
        height: 56px;
        width: 70px;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 600;
        box-shadow: 0 4px 0 ${theme.palette.boldestPrimary};

        &:hover {
          background-color: ${theme.palette.lightPrimary};
          box-shadow: 0 4px 0 ${theme.palette.primary};
        }
      }
    }
  }
`;

export const PlayGameContainerWrapper = styled.div`
  height: 87vh;
  background-color: ${theme.palette.boldPrimary};
  margin: 0 10px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-section {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 45%;
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    cursor: default;
  }

  .answer-section {
    display: flex;
    width: 98%;
    justify-content: space-between;
    align-items: center;
    height: 55%;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 18px;
  }
`;

export const RankingContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;
  .rank-section {
    width: 500px;
    border-radius: 16px;
    color: white;

    .header-rank-table {
      width: 700px;
      display: flex;
      justify-content: flex-start;
      font-weight: lighter;

      .first-title {
        margin-left: 20px;
      }

      .second-title {
        margin-left: 90px;
      }

      .third-title {
        margin-left: auto;
        margin-right: 20px;
      }
    }

    .content-rank-table {
      .divider {
        height: 10px;
        width: 4px;
        background: hsla(0, 0%, 100%, 0.15);
        margin-bottom: 5px;
        margin-left: 140px;
      }
    }
  }
`;

export const EntranceContainerWrapper = styled.div`
  color: #fff;
  font-size: 20px;
  padding: 24px;
  border-radius: 16px;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.08),
    hsla(0, 0%, 100%, 0.04)
  );
  .title {
    display: flex;
    margin-bottom: 30px;

    .test-image {
      width: 100px;
      height: 100px;
      border-radius: 8px;
      margin-right: 20px;
    }

    .infor {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .name {
        font-size: 32px;
      }

      .total-question {
        font-size: 20px;
        color: #adadad;
      }
    }
  }
  .creator-section {
    margin-bottom: 40px;
  }
  .btn-start {
    width: 100%;
    background-color: rgb(0, 201, 133);
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 24px;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 10px 70px;
    font-weight: 600;

    &:hover {
      background-color: #01af74;
      color: #fff;
    }
  }
`;
