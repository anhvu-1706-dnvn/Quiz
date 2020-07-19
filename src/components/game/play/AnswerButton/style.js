import styled from 'styled-components';

export default styled.div`
  width: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 8px;
  font-size: 32px;
  font-weight: 500;
  cursor: pointer;
`;
