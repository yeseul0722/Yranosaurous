import styled from 'styled-components';
const StyledNavBarContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  background-color: ${(props) => props.theme.colors.main};
  align-items: center;
  justify-content: space-around;
  position: relative;
`;
const StyledServiceName = styled.a`
  display: flex;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
`;

const StyledMenuContainer = styled.div.attrs<any>((props) => ({}))`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 2%;
  z-index: i;
`;

const StyledMenu = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
`;

export { StyledNavBarContainer, StyledServiceName, StyledMenuContainer, StyledMenu };
