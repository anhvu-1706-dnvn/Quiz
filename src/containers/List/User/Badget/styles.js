import styled from 'styled-components';

export default styled.div`

  .ant-card-body {
    padding: 24px;
  }

  

  .badget {
    margin-bottom: 20px;
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
  
    .card-header {
      position: relative;
      
      // .quizz-img {
      //   height: 100px;
      //   width: 200px;
      // }
  
      .card-stat-row {
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 12px 12px;
        justify-content: center;
        .card-stat {
          padding: 0 20px;
          background-color: #f2f2f2;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
          border-radius: 30px;
          font-size: 30px;
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
      text-align: center;
    }

    .name-wrapper {
      color: #fff;
      text-transform: uppercase;
    }
  }

  .badget-0 {
    background: #9b59b6;
  }
  .badget-1 {
    background: #3498db;
  }
  .badget-2 {
    background: #2ecc71;
  }

`
