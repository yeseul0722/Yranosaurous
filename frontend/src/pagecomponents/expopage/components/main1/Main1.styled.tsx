import styled, { css } from 'styled-components';

const StyledMainContainer = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    const white = props.theme.colors.white;
    return css`
      background-color: ${main};
      color: ${white};
    `;
  }}
`;
const StyledTitleBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;
    return css`
      font-family: ${font};
      display: flex;
      align-items: center;
      width: 1120px;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-around;
      padding-top: 50px;
      padding-bottom: 5px;
    `;
  }}
`;
const StyledCardBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-top: 70px;
      padding-bottom: 100px;
    `;
  }}
`;

const StyledTitle = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;
    const white = props.theme.colors.white;
    const fontsize = props.size;
    return css`
      color: ${white};
      font-family: ${font};
      font-size: ${fontsize};
    `;
  }}
`;
const StyledText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;
    const white = props.theme.colors.white;
    const black = props.theme.colors.black;
    const color = props.color === 'black' ? black : white;
    return css`
      color: ${color};
      font-family: ${font};
      font-size: 20px;
    `;
  }}
`;
const StyledEnglish = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;
    const white = props.theme.colors.white;
    const black = props.theme.colors.black;
    const color = props.color === 'black' ? black : white;
    return css`
      color: ${color};
      font-family: ${font};
      font-size: 25px;
    `;
  }}
`;

export { StyledMainContainer, StyledCardBox, StyledTitle, StyledTitleBox, StyledText, StyledEnglish };
