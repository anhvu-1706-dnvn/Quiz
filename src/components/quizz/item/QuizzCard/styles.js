import styled from 'styled-components';
import theme from '../../../../configs/theme';

export default styled.div`
  max-width: 198px;
  max-height: 198px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
  transform: scale(1);
  transition: scale 0.1s ease-out, box-shadow 0.1s ease-out;
  margin-right: 20px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.05),
      -4px 6px 8px 4px rgba(0, 0, 0, 0.05), 4px 6px 8px 4px rgba(0, 0, 0, 0.05);
  }

  .card-header {
    position: relative;
    background-color: ${theme.palette.boldestPrimary};

    .quizz-img {
      height: 100px;
      width: 200px;
    }

    .card-stat-row {
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding: 0 12px;

      .card-stat {
        padding: 0 4px;
        background-color: #f2f2f2;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        color: rgba(41, 42, 58, 0.67);
      }
    }
  }

  .content-wrapper {
    box-sizing: border-box;
    padding: 14px 12px 12px;
    height: 100px;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    color: #292a3a;
    overflow: hidden;
  }
`;
