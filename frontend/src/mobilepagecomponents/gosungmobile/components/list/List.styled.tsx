import styled from 'styled-components';

const StyledListContainer = styled.div`
  width: 100%;
  max-height: 90vh;
  background-color: ${(props) => props.theme.colors.main};
`;

const StyledListTopContainer = styled.div`
  /* padding: 20px; */
  /* border-bottom: 1px solid ${(props) => props.theme.colors.light}; */
`;

const StyledListButtonContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
`;
const StyledButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  flex: 1;
`;

// const StyledButton = styled.button.attrs<any>((props) => ({}))`
//   /* border-radius: 20px; */
//   background-color: ${(props) => (props.name === props.select ? props.theme.colors.night : props.theme.colors.light)};
//   color: ${(props) => props.theme.colors.white};
//   font-size: 20px;
//   padding-bottom: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: hidden;
//   width: 100%;
//   height: 100%;
//   font-family: ${(props) => props.theme.fonts.regularfont};
//   flex: 1;
//   cursor: pointer;
// `;

const StyledButtonContainer = styled.div.attrs<any>((props) => ({}))`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.id === props.select ? props.theme.colors.menu : props.theme.colors.main)};
  padding: 10px 0px;
`;
const StyledButtonImageContainer = styled.div.attrs<any>((props) => ({}))`
  min-height: 0px;
  min-width: 0px;
  max-height: 35px;
  max-width: 35px;
  background-color: ${(props) => (props.id === props.select ? props.theme.colors.menu : props.theme.colors.main)};
  color: ${(props) => (props.id === props.select ? props.theme.colors.main : props.theme.colors.white)};
  border: none;
  margin-right: 5px;
`;
const StlyedButtonImg = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.div.attrs<any>((props) => ({}))`
  background-color: ${(props) => (props.id === props.select ? props.theme.colors.menu : props.theme.colors.main)};
  color: ${(props) => (props.id === props.select ? props.theme.colors.main : props.theme.colors.white)};
  font-size: 20px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  border: none;
  /* width: 100%; */
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* flex: 1; */
  cursor: pointer;
`;

const StyledOpenListCotainer = styled.div`
  background-color: ${(props) => props.theme.colors.menu};
`;
export {
  StyledListContainer,
  StyledListTopContainer,
  StyledListButtonContainer,
  StyledButtonBox,
  StyledButton,
  StyledButtonContainer,
  StyledButtonImageContainer,
  StlyedButtonImg,
  StyledOpenListCotainer,
};
