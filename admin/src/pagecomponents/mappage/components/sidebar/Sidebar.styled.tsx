import styled, { css } from 'styled-components';

const StyledSidebar = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;

    return css`
      position: absolute;
      right: 0;
      top: 0;
      width: 250px;
      height: 100%;
      background-color: rgba(242, 242, 242, 0.8);
      z-index: 100;
      padding: 0px 30px;
      font-family: ${font};
    `;
  }}
`;
const StyledTitle = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;

    return css`
      font-family: ${font};
      font-size: 25px;
      margin: 30px 0px;
      text-align: center;
    `;
  }}
`;
const StyledSubTitle = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;

    return css`
      font-family: ${font};
      font-size: 20px;
      margin-bottom: 10px;
    `;
  }}
`;
const StyledBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.regularfont;
    const black = props.theme.colors.black;
    const main = props.theme.colors.main;
    const white = props.theme.colors.white;

    return css`
      font-family: ${font};
      font-size: 16px;
      padding: 10px 0px 10px 20px;
      color: ${black};
      background-color: ${white};
      border: 1.7px solid ${main};
      margin-bottom: 5px;
    `;
  }}
`;

export { StyledSidebar, StyledTitle, StyledSubTitle, StyledBox };
