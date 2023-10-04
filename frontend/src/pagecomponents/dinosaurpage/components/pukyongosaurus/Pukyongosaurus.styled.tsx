import styled from 'styled-components';

const StyledpukyongsaurusPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.night};
  background-image: url('/dinosaur/pukyongBackground.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const StyledPukyongTitleNum = styled.div`
  color: #324247;
  font-size: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 100%;
  width: 13rem;
  height: 13rem;
  position: absolute;
  z-index: 1;
  left: 1rem;
`;

const StyledPukyongFirstContent = styled.div`
  /* border: 1px solid red; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  text-align: left;
  padding-top: 7rem;
  padding-left: 10rem;
  padding-right: 5rem;
  width: 50rem;
  z-index: 50;
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
  display: flex;
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
  top: 2rem;
  width: 28rem;
`;

const StyledPukyongSizeContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
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
  top: 38rem;
  left: 1rem;
`;

const StyledPukyongLengthText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
  position: absolute;
  top: 50rem;
  left: 14rem;
`;

const StyledPukyongLottieWeight = styled.div`
  width: 5rem;
  position: absolute;
  top: 35rem;
  left: 18rem;
`;

const StyledPukyongWeightText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
  position: absolute;
  top: 31rem;
  left: 9rem;
`;

export {
  StyledpukyongsaurusPage,
  StyledPukyongTitleNum,
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
