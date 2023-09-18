import styled, { css } from 'styled-components';

const StyledSidebar = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;

    return css`
      position: absolute;
      right: 0;
      top: 0;
      width: 360px;
      height: 100%;
      background-color: rgba(242, 242, 242, 0.8);
      z-index: 100;
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
    `;
  }}
`;

export { StyledSidebar, StyledTitle };
