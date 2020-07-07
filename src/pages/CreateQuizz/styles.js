import styled from 'styled-components';
import theme from '../../configs/theme';

export default styled.div`
  .scroll-vertical {
    overflow-y: auto;
    max-height: 100vh;
  }
  .title {
    display: flex;
    margin-bottom: 10px;

    .error {
      margin-left: 4px;
      color: ${theme.palette.error};
    }
  }
`;
