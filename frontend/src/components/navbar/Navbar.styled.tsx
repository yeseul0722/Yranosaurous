import styled, { css } from 'styled-components';

const StyledNavBar = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const MainBgColor = props.currentPage === 'ExpoPage' ? props.theme.colors.light : props.theme.colors.main;

    return css`
      width: 100%;
      height: 60px;
      background-color: ${MainBgColor};
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 1120px;
      position: fixed;
      z-index: 100;
      overflow: hidden;
    `;
  }}
`;

const StyledLogoContainer = styled.div`
  display: flex;
  padding-left: 20px;
  cursor: pointer;
`;

const StyledLogo = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  height: 40px;
  width: auto;
`;

const StyledEndComponent = styled.div`
  position: fixed;
  right: 50px;
  display: flex;
  gap: 50px;
  justify-content: center;
`;

const StyledLinkText = styled.a.attrs<any>((props) => ({}))`
  ${(props) => {
    const navState = props.navstate;
    const name = props.name;
    const dark = props.theme.colors.dark;
    const white = props.theme.colors.white;

    const color = props.currentPage === 'ExpoPage' ? dark : white;

    return css`
      display: flex;
      align-items: center;
      font-family: ${(props) => props.theme.fonts.boldfont};
      font-size: 20px;
      color: ${color};
      text-decoration: none;
      padding: 5px;
      border-bottom: ${navState === name ? `3px solid ${color}` : null};
      border-top: ${navState === name ? `3px solid ${color}` : null};
      cursor: pointer;
    `;
  }}
`;

export { StyledNavBar, StyledLogoContainer, StyledLogo, StyledEndComponent, StyledLinkText };
