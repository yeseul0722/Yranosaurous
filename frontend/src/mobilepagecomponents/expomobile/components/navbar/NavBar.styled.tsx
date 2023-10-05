import styled from 'styled-components';
const StyledNavBarContainer = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  background-color: #f3f8f8;
  align-items: center;
  /* justify-content: space-around; */
  position: fixed;
  z-index: 100;
`;
const StyledServiceName = styled.a`
  display: flex;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  text-decoration: none;
  margin: 5px;
  font-size: 16px;
`;

const StyledMenuContainer = styled.div.attrs<any>((props) => ({}))`
  /* z-index: 1; */
  /* height: 35px;
  width: 128px; */
  height: 60%;
  margin-left: 3%;
`;

const StyledMenu = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
`;

const StyledRightMenu = styled.div`
  display: flex;
  gap: 30px;
  margin-left: auto;
  margin-right: 5%;
`;

export { StyledNavBarContainer, StyledServiceName, StyledMenuContainer, StyledMenu, StyledRightMenu };
