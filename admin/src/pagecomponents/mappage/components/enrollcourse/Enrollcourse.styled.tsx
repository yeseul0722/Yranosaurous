import styled, { css } from 'styled-components';

const StyledSidebar = styled.div`
  gap: 20px;
  height: 77vh;
  overflow: hidden auto;
  padding-right: 7px;
  display: flex;
  flex-direction: column;
`;
const StyledCourseMap = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;

    return css`
      font-family: ${font};
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 5px;
      justify-content: flex-start;
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

export { StyledSidebar, StyledCourseMap, StyledSubTitle, StyledBox };
