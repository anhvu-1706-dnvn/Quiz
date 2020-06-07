import styled from 'styled-components';

export default styled.div`
  display: inline-flex;
  width: 50%;
  margin-bottom: 12px;

  .option-marker {
    margin-right: 8px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #d8d8d8;
    vertical-align: middle;
  }

  .true {
    background-color: #00c985;
  }

  .false {
    background-color: #f14d76;
  }
`;
