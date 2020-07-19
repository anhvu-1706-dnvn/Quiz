import styled from 'styled-components';
import theme from '../../configs/theme';

export const JoinGamePageWrapper = styled.div`
  .game-layout {
    .header {
      background-color: #fff !important;
      padding: 0 20px !important;
      border-bottom: 2px solid rgba(0, 0, 0, 0.21);
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;

      .left-section {
        display: flex;
        align-items: center;

        .logo {
          margin-right: 20px;

          .logo-img {
            height: 40px;
            display: inline-block;
          }
        }

        .search {
          margin-right: 20px;
          .input-search {
            width: 270px;
          }
        }

        .btn-section {
          .btn-nav {
            color: rgba(41, 42, 58, 0.66);
            font-size: 16px;
            font-weight: 700;
            height: 62px;
            border: none;
            border-radius: 0;
            padding: 0 20px;

            span {
              margin-left: 6px !important;
            }
          }

          .nav-active {
            border-bottom: 3px solid ${theme.palette.primary};
            color: ${theme.palette.primary};
          }

          .nav-disable {
            &:hover {
              color: ${theme.palette.primary};
            }
          }
        }
      }

      .right-section {
        display: flex;
        align-items: center;

        .btn-back {
          border: none;
          background-color: rgba(41, 42, 58, 0.1);
          border-radius: 4px;
          font-size: 16px;
          border: none;
          outline: none;
          color: #292a3a;
          text-decoration: none;
          font-weight: 700;

          &:hover {
            background-color: rgba(41, 42, 58, 0.15);
          }
        }

        .btn-menu {
          width: 32px;
          height: 32px;
          background-color: rgba(41, 42, 58, 0.1);
          font-size: 16px;
          color: #292a3a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 30px;

          &:hover {
            background-color: rgba(41, 42, 58, 0.15);
          }
        }
      }
    }
    .content {
      margin-top: 64px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const PlayGamePageWrapper = styled.div`
  height: 100vh;
  background-color: #000;

  .play-layout {
    .content {
      background-color: #000;
    }
    .header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      background-color: #000;
      padding: 0 10px;

      .left-section {
        display: flex;
        align-items: center;
        color: #fff;

        .btn-pause {
          background-color: hsla(0, 0%, 100%, 0.33);
          color: #fff;
          border: none;
          font-size: 18px;
          padding: 0;
          width: 40px;
          height: 40px;
          border-radius: 8px;

          &:hover {
            background-color: hsla(0, 0%, 100%, 0.5);
          }
        }

        .infor-wrapper {
          span {
            background: hsla(0, 0%, 100%, 0.15);
            padding: 10px 14px;
            border-radius: 8px;
            margin-left: 10px;
            font-weight: 700;
            cursor: default;

            .icon {
              margin-left: 10px;
              margin-right: 3px;
            }
          }
        }
      }

      .right-section {
        display: flex;
        color: #fff;
        align-items: center;
        .infor-wrapper {
          span {
            background: hsla(0, 0%, 100%, 0.15);
            padding: 10px 14px;
            border-radius: 8px;
            margin-left: 10px;
            cursor: default;
            font-size: 16px;
            // display: flex;
            // align-items: center;

            .icon {
              margin-right: 6px;
            }

            .rank-icon {
              color: ${theme.palette.primary};
            }

            .score-icon {
              color: #f6a624;
            }
          }
        }
      }
    }
  }
`;
