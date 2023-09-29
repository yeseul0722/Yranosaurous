import styled from 'styled-components';

const StyledpukyongsaurusPage = styled.div`
  height: 150vh;
  background-color: ${(props) => props.theme.colors.night};
  background-image: url('/dinosaur/pukyongBackground.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledPukyongFirstContent = styled.div`
  /* border: 1px solid red; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  text-align: left;
  padding-top: 17rem;
  padding-left: 10rem;
  padding-right: 5rem;
  width: 50rem;
  cursor: default;
`;

const StyledPukongTitle = styled.div`
  /* border: 1px solid blue; */
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const StyledPukongLitteTitle = styled.div`
  /* border: 1px solid pink; */
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyledPukongSummary = styled.div`
  /* border: 1px solid yellow; */
  font-size: 1.2rem;
  line-height: 150%;
`;

const StyledPukyongImage1 = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  /* border: 1px solid aquamarine; */
  position: absolute;
  right: 10rem;
  top: 10rem;
  width: 28rem;
`;

const StyledPukyongSizeContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  margin-top: 5rem;
`;

const StyledPukyongSizeImgContainer = styled.div`
  /* padding: 5rem; */
`;

const StyledPukyongSecondContent = styled.div`
  /* border: 1px solid red; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  text-align: left;
  margin-top: 10rem;
  padding-right: 2rem;
`;

const StyledPukyongSizeImage1 = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  /* position: absolute;
  top: 40rem;
  right: 4rem; */
  width: 40rem;
  margin-bottom: 1.5rem;
`;

// Lottie
const StyledPukyongLottieLength = styled.div`
  width: 37rem;
  filter: invert(100%);
  position: absolute;
  top: 54rem;
  left: 1rem;
`;

const StyledPukyongLengthText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
  position: absolute;
  top: 67rem;
  left: 14rem;
`;

const StyledPukyongLottieWeight = styled.div`
  width: 5rem;
  position: absolute;
  top: 50rem;
  left: 18rem;
`;

const StyledPukyongWeightText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
  position: absolute;
  top: 46rem;
  left: 15rem;
`;

export {
  StyledpukyongsaurusPage,
  StyledPukyongFirstContent,
  StyledPukongTitle,
  StyledPukongLitteTitle,
  StyledPukongSummary,
  StyledPukyongImage1,
  StyledPukyongSizeContainer,
  StyledPukyongSizeImgContainer,
  StyledPukyongSecondContent,
  StyledPukyongSizeImage1,
  StyledPukyongLottieLength,
  StyledPukyongLengthText,
  StyledPukyongLottieWeight,
  StyledPukyongWeightText,
};
