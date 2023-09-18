import styled, { css } from 'styled-components';

const StyledMainpage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-bottom: 80px;
`;
const StyledTitle = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const color = props.theme.colors.dark;
    const font = props.theme.fonts.boldfont;
    return css`
      color: ${color};
      font: ${font};
      font-size: 50px;
      font-weight: 550;
    `;
  }}
`;
const StyledInputBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const color = props.theme.colors.dark;
    return css`
      display: flex;
      align-items: center;
      border: 2.5px solid ${color};
      width: 250px;
      height: 30px;
      padding: 5px 10px;
      background-color: rgba(255, 255, 255, 0.5);
    `;
  }}
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 17px;
`;

export { StyledMainpage, StyledBox, StyledTitle, StyledInputBox, StyledInput };
