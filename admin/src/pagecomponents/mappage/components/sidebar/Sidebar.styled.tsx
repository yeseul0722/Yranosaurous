import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

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
      font-size: 18px;
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
      font-size: 15px;
      line-height: 35px;
      height: 35px;
      width: 100%;
      color: ${black};
      background-color: ${white};
      border: 1.7px solid ${main};
      margin-bottom: 5px;
    `;
  }}
`;

const StyledTextarea = styled(TextareaAutosize).attrs<any>((props) => ({}))`
  width: 250px;
  padding-top: 8px;
  min-height: 25px;
  border: 1.75px solid ${(props) => props.theme.colors.main};
  resize: none;
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  &:focus {
    outline: none;
    border: solid 2px ${(props) => props.theme.colors.main};
  }
`;

export { StyledSidebar, StyledTitle, StyledSubTitle, StyledBox, StyledTextarea };
