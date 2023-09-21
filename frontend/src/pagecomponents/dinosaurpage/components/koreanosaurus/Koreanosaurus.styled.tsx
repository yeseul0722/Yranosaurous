import styled from 'styled-components';

const StyledKoreasaurusPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.night};
  display: flex;
  justify-content: space-between;
`;

const StyledKoreasaurusBody = styled.div`
  border: 1px solid red;
`;

const StyledKoreasaurusGeneration = styled.div`
  border: 1px solid yellow;
`;

const StyledKoreasaurusTitle = styled.div`
  border: 1px solid yellowgreen;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
`;

const StyledKoreasaurusLittleTitle = styled.div`
  border: 1px solid yellowgreen;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 2rem;
`;

const StyledKoreasaurusContent = styled.div`
  border: 1px solid blue;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
`;

const StyledKoreasaurusFigure = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const StyledKoreasaurusImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  border: 1px solid aquamarine;
  width: 40rem;
  height: 60rem;
`;

const StyledKoreasaurusCircle = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 15rem;
  left: 25rem;
  filter: invert(80%);
`;

const StyledKoreasaurusInfo = styled.div`
  border: 1px solid orange;
  height: 10rem;
  display: flex;
`;

const StyledKoreasaurusHeight = styled.div`
  border: 1px solid blue;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
`;
const StyledKoreasaurusWeight = styled.div`
  border: 1px solid blue;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
`;

export {
  StyledKoreasaurusPage,
  StyledKoreasaurusBody,
  StyledKoreasaurusGeneration,
  StyledKoreasaurusTitle,
  StyledKoreasaurusLittleTitle,
  StyledKoreasaurusContent,
  StyledKoreasaurusFigure,
  StyledKoreasaurusCircle,
  StyledKoreasaurusImg,
  StyledKoreasaurusInfo,
  StyledKoreasaurusHeight,
  StyledKoreasaurusWeight,
};
