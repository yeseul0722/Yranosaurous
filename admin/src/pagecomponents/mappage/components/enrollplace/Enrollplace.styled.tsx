import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

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

const StyledFileInputLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.regularfont};
  &:active {
    margin-left: 3px;
    margin-top: 3px;
  }
`;

const HiddenFileInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

const StyledTextarea = styled(TextareaAutosize).attrs<any>((props) => ({}))`
  width: 235px;
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

export { StyledSubTitle, StyledBox, StyledTextarea, StyledFileInputLabel, HiddenFileInput };
