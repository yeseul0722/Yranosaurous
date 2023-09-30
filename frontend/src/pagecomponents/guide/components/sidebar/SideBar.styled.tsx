import styled from 'styled-components';

const StyledSideBarContainer = styled.div``;
const StyledSideBar = styled.div`
  position: absolute;
  left: 0px;
  height: 100vh;
  width: 72px;
  z-index: 100;
  background-color: white;
`;

const StyledMenu = styled.div.attrs<any>((props) => ({}))`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.main};
  gap: 5px;
  background-color: ${(props) => (props.name === props.state ? props.theme.colors.light : 'white')};
  cursor: pointer;
`;

const StyledMenuIcon = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 36px;
  height: 36px;
`;

const StyledMenuTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 15px;
  color: ${(props) => props.theme.colors.black};
`;

export { StyledSideBarContainer, StyledSideBar, StyledMenu, StyledMenuIcon, StyledMenuTitle };
