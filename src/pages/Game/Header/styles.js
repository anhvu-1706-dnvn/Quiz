import styled from 'styled-components';
import theme from '../../../configs/theme';

export default styled.div`
  .header {
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 0 10px;
    height: auto;

    .progress-section {
      display: flex;
      width: 100%;

      .countdown-bar {
        .ant-progress-outer {
          padding-right: 0;
        }

        .ant-progress-bg {
          background-color: ${theme.palette.primary} !important;
        }
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;

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
