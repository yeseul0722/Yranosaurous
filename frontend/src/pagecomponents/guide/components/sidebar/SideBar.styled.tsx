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

  gap: 5px;
  background-color: ${(props) => (props.name === props.state ? props.theme.colors.main : 'white')};
  /* background-color: ${(props) => (props.name === props.hover ? props.theme.colors.light : 'white')}; */
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 15px;
  color: ${(props) => (props.name === props.state ? props.theme.colors.white : props.theme.colors.main)};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledMenuIcon = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 30px;
  height: 30px;
`;
const StyledMenuIcon2 = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 45px;
  height: 45px;
`;

const StyledMenuTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 15px;
  color: ${(props) => props.theme.colors.main};
`;

export { StyledSideBarContainer, StyledSideBar, StyledMenu, StyledMenuIcon, StyledMenuTitle, StyledMenuIcon2 };
