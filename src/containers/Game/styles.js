import styled from 'styled-components';
import theme from '../../configs/theme';

export const JoinGameContainerWrapper = styled.div`
  margin-top: 30px;

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
