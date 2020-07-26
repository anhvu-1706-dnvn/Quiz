import styled from 'styled-components';
import theme from '../../../configs/theme';

export default styled.div`

  .test-info {
    display:flex;
    padding: 20px;
    background: #778beb;
    border-radius: 4px;
    margin-bottom: 20px;
    color: #fff;
  }


  .quiz-info-image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 80px;
    background-color: white;
    border-radius: 5px;
    width: 300px;
    .quiz-info-img {
      height: 100px;
      width: 150px;
    }
    .quiz-info-img-text {
      margin-top: 10px;
    }
    &:hover {
      background-color: ${theme.palette.lightestPrimary};
    }
  }

  .quiz-info-name-wrapper {
    margin-top: 10px;
    
    .quiz-info-name {
      font-size: 30px;
      margin-right: 10px;
    }
    .quiz-info-author {
      font-weight: bold;
    }
  }
  .quiz-info-detail-wrapper {
    margin-top: 30px;
    margin-left: 20px;
    .item-description {
      display: flex;

      .icon-description {
        margin-top: 4px;
      }

      .description {
        max-width: 200px;
      }
    }
    .item {
      margin-bottom: 10px;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline !important;
      }

      .icon {
        margin-right: 8px;
      }
    }
  }
`;
