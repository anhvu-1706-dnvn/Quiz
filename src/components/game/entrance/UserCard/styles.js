import styled from 'styled-components';
import theme from '../../../../configs/theme';

export default styled.div`
  margin: 10px 10px;
  display: inline-flex;
  background: #fff;
  color: #000;
  align-items: center;
  padding: 5px;
  border-radius: 18px;
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${theme.palette.boldestPrimary};
  }
  .name {
    margin: 0 26px;
    font-size: 16px;
    font-weight: 600;
  }
`;
