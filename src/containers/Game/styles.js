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
          background-color: ${theme.palette.boldPrimary};
          box-shadow: 0 4px 0 ${theme.palette.boldPrimary};
          border: none;
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

export const EntranceContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .code-section {
    color: #fff;
    font-size: 32px;
    padding: 24px;
    border-radius: 16px;
    background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.08),
      hsla(0, 0%, 100%, 0.04)
    );

    span {
      margin-left: 10px;
      font-size: 44px;
      font-weight: 700;
    }
  }

  .quiz-infor-section {
    margin-top: 40px;
    color: #fff;
    font-size: 20px;
    padding: 24px;
    border-radius: 16px;
    background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.08),
      hsla(0, 0%, 100%, 0.04)
    );
    .header {
      display: flex;
      width: 800px;
      justify-content: space-between;
      align-items: center;

      .title {
        display: flex;

        .test-image {
          width: 100px;
          height: 100px;
          border-radius: 8px;
          margin-right: 20px;
          background-color: ${theme.palette.boldestPrimary};
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
    }
    .btn-section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;

      .entrance-btn {
        width: 100%;

        border: none;
        border-radius: 8px;

        font-size: 18px;
        display: flex;
        height: auto;
        align-items: center;
        justify-content: center;
        padding: 10px 70px;
        font-weight: 600;
      }

      .btn-start {
        background-color: rgb(0, 201, 133);
        color: #fff;
        &:hover {
          background-color: #01af74;
          color: #fff;
        }
      }
    }
  }

  .user-section {
    padding: 24px;
    border-radius: 16px;
    background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.08),
      hsla(0, 0%, 100%, 0.04)
    );
    max-width: 1100px;
    margin-top: 20px;
  }
`;

export const ResultContainerWrapper = styled.div`
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
    font-size: 32px;
    align-items: center;
    margin-bottom: 20px;

    .avatar {
      width: 80px;
      border-radius: 8px;
      margin-right: 20px;
    }
  }

  .played-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    .accuracy-title {
      width: 100%;
      font-size: 16px;
      color: #504750;
    }

    .ant-progress-text {
      color: #fff !important;
    }

    .title {
      color: #504750;
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .detail-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;

      .stat-container {
        display: flex;
        align-items: center;

        .icon-correct {
          margin-right: 10px;
          color: #00c985;
        }

        .icon-incorrect {
          margin-right: 10px;
        }
      }
    }
  }

  .played-infor {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    .infor-container {
      display: flex;
      p {
        margin: 0;
      }

      .left-section {
        .title {
          color: #504750;
          font-size: 16px;
        }
      }

      .right-section {
        display: flex;
        align-items: center;
        margin-left: 20px;

        .icon {
          padding: 8px;
          font-size: 22px;
          border-radius: 8px;
        }

        .dollar-icon {
          background: linear-gradient(
            135deg,
            #f5a623,
            rgba(245, 166, 35, 0.69)
          );
        }

        .golden-icon {
          background: linear-gradient(
            135deg,
            ${theme.palette.primary},
            ${theme.palette.boldestPrimary}
          );
        }
      }
    }
  }

  .btn-container {
    display: flex;
    flex-direction: column;

    .btn-result-page {
      border: none;
      margin-bottom: 20px;
      height: 45px;
      font-size: 18px;
      font-weight: 700;
    }

    .btn-play-again {
      color: #fff;
      background-color: ${theme.palette.primary}
      &:hover {
        background-color: ${theme.palette.boldPrimary}
      }
    }

    .btn-back {
      color: #000;
    }
  }
`;

export const LeaderBoardContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  .rank-section {
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
      display: inline-block;

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
