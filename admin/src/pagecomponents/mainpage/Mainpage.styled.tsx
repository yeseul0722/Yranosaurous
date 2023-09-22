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
      font-family: ${font};
      font-size: 50px;
      font-weight: 550;
      text-align: center;
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

const StyledWrongMsg = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const color = props.theme.colors.black;
    const font = props.theme.fonts.regularfont;
    return css`
      color: ${color};
      font-family: ${font};
      font-size: 15px;
      padding: 5px 0px 0px 30px;
    `;
  }}
`;

export { StyledMainpage, StyledBox, StyledTitle, StyledInputBox, StyledInput, StyledWrongMsg };
