import styled from 'styled-components';

const StyledDinosaurCardContainer = styled.div.attrs<any>((props) => ({}))`
  /* border: 1px solid violet; */
  width: 150px;
  height: 100px;
  position: relative;
  margin: 10px;
`;

const StyledDinosaurCardImage = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
`;

const StyledDinosaurCardName = styled.div.attrs<any>((props) => ({}))`
  /* border: 1px solid tomato; */
  position: absolute;
  bottom: 8px;
  left: 5px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  color: ${(props) => props.theme.colors.white};
`;

export { StyledDinosaurCardContainer, StyledDinosaurCardImage, StyledDinosaurCardName };
