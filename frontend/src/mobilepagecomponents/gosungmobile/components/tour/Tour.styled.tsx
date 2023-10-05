import styled from 'styled-components';

const StyldTourCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTourCategoryButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  padding: 20px 20px 0px 20px;
  max-height: 20vh;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledTourCategoryButton = styled.button.attrs<any>((props) => ({}))`
  border-radius: 20px;
  background-color: ${(props) => (props.name === props.select ? props.theme.colors.white : props.theme.colors.main)};
  color: ${(props) => (props.name === props.select ? props.theme.colors.black : props.theme.colors.white)};
  font-size: 13px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.name === props.select ? `2px solid ${props.theme.colors.black}` : 'hidden')};
  /* width: 100px; */
  /* flex: 1; */

  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledTourListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 20px; */
  overflow: scroll;
  max-height: 40vh;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledTourContentContainer = styled.div`
  /* position: relative; */
  height: auto;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  margin: 3%;
`;
const StyledTourContent = styled.div`
  width: 100px;
  height: 100px;
`;

const StyledTourImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
const StyledTourName = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 15px;
  width: 100px;
  /* position: absolute;
  bottom: 0px;
  left: 10px; */
`;

const StyledCategotyContainer = styled.div`
  display: flex;
  width: 100%;
`;

export {
  StyldTourCategoryContainer,
  StyledTourCategoryButtonContainer,
  StyledTourCategoryButton,
  StyledTourListContainer,
  StyledTourContentContainer,
  StyledTourContent,
  StyledTourImg,
  StyledTourName,
  StyledCategotyContainer,
};
