import styled, { css } from 'styled-components';

const StyledBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const main = props.theme.colors.main;

    return css`
      height: 55px;
      color: ${black};
      border: 1.7px solid ${main};
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `;
  }}
`;
const StyledShowTitle = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;
    const dark = props.theme.colors.dark;

    return css`
      font-family: ${font};
      font-size: 17px;
      color: ${dark};
      text-align: left;
    `;
  }}
`;
const StyledShowText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;
    const black = props.theme.colors.black;

    return css`
      font-family: ${font};
      font-size: 17px;
      color: ${black};
    `;
  }}
`;
const StyledTimeContainer = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
    `;
  }}
`;

export { StyledBox, StyledShowTitle, StyledShowText, StyledTimeContainer };
