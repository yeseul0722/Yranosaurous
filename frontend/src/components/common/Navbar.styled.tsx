import styled, { css } from 'styled-components';

const StyledNavBar = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const MainBgColor = props.theme.colors.main;

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

const StyledNavBarDropDown = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const WhiteBgColor = props.theme.colors.white;
    return css`
      width: 100%;
      height: 30px;
      background-color: ${WhiteBgColor};
      position: fixed;
      top: 60px;
      z-index: 100;
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

const StyledName = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 25px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  padding-left: 10px;
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
    return css`
      display: flex;
      align-items: center;
      font-family: ${(props) => props.theme.fonts.boldfont};
      font-size: 20px;
      color: ${(props) => props.theme.colors.white};
      text-decoration: none;
      padding: 5px;
      border-bottom: ${navState === name ? `3px solid ${props.theme.colors.white}` : null};
      border-top: ${navState === name ? `3px solid ${props.theme.colors.white}` : null};
      cursor: pointer;
    `;
  }}
`;

const StyledLinkDetailContainer = styled.a.attrs<any>((props) => ({}))``;

const StyledLinkDetail = styled.a.attrs<any>((props) => ({}))``;

export {
  StyledNavBar,
  StyledNavBarDropDown,
  StyledLogoContainer,
  StyledLogo,
  StyledName,
  StyledEndComponent,
  StyledLinkText,
  StyledLinkDetailContainer,
  StyledLinkDetail,
};
