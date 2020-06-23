import styled from 'styled-components';
import theme from '../../../configs/theme';

export const TagSubjectWrapper = styled.div`
  display: inline-block;
  padding: 5px 12px;
  background-color: #f2f2f2;
  border-radius: 28px;
  font-size: 12px;
  color: #292a3a;
  margin-right: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.primary};
    color: white;
  }
`;

export const QuestionTypeWrapper = styled.div`
  width: 152px;
  height: 142px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .questionType-icon-wrapper {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: red;
    font-size: 24px;
  }

  .questionType-name {
    font-size: 16px;
    font-weight: 600;
    color: #292a3a;
    margin-top: 16px;
    text-transform: capitalize;
  }
  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
`;
