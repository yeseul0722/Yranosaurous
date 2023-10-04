import styled from 'styled-components';

const StyledCourseSelectConatiner = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 410px;
  top: 10px;
  z-index: 2;
  gap: 20px;
`;

const StyledCouseSelectButton = styled.button.attrs<any>((props) => ({}))`
  width: 100px;
  height: 30px;
  border-radius: 45px;
  background-color: ${(props) => (props.name === props.select ? props.theme.colors.main : props.theme.colors.light)};
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

export { StyledCourseSelectConatiner, StyledCouseSelectButton };
