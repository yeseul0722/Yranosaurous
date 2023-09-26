import styled, { keyframes } from 'styled-components';

const StyledKoreasaurusPage = styled.div`
  /* height: 100%; */
  height: 300vh;
  /* background-color: ${(props) => props.theme.colors.night}; */
  background-image: url('/dinosaur/backgroundimg.jpg');
  background: rgba(0, 0, 0, 0.5) url('/dinosaur/background60.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  position: relative;
`;

const StyledKoreasaursTitleNum = styled.div`
  border: 0.8rem solid #324247;
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
  top: 12rem;
  left: 5rem;
`;

const StyledKoreasaursFirstContent = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  /* border: 1px solid red; */
  text-align: left;
  padding-top: 17rem;
  padding-left: 9rem;
  z-index: 50;
  width: 55%;
`;

const StyledKoreasaurusTitle = styled.div`
  /* border: 1px solid blue; */
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const StyledKoreasaursLittleTitle = styled.div`
  /* border: 1px solid yellow; */
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyledKoreasaursSummary = styled.div`
  /* border: 1px solid green; */
  font-size: 1.2rem;
  line-height: 150%;
`;

const StyledKoreasaursImage1 = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  /* border: 1px solid aquamarine; */
  position: absolute;
  right: 6rem;
  top: 8rem;
  width: 40rem;
`;

const StyledKoreasaursImage2 = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  /* border: 1px solid aquamarine; */
  position: absolute;
  right: 11rem;
  top: 20rem;
  height: 30rem;
`;

const StyledKoreasaursImage2LottieLine = styled.div`
  /* border: 1px solid pink; */
  position: absolute;
  width: 15rem;
  filter: invert(100%);
  top: 58rem;
  left: 42rem;
  transform: rotate(0deg);
`;

const StyledKoreasaursImage2LottieBackLine = styled.div`
  background-color: #ffffff;
  position: absolute;
  /* border-radius: 50px;
  width: 1rem;
  height: 8rem; */
  top: 38rem;
  right: 24rem;
`;

const StyledKoreasaursImage2LottieCircle = styled.div`
  position: absolute;
  width: 5rem;
  filter: invert(100%);
  top: 60rem;
  left: 37rem;
`;

const StyledKoreasaursImage2WeightText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
  position: absolute;
  top: 61rem;
  left: 57rem;
`;

const StyledKoreasaursSizeContainer = styled.div`
  /* border: 1px solid pink; */
  margin-top: 15rem;
  margin-bottom: 10rem;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
`;

const StyledKoreasaursSizetImage = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  /* border: 1px solid aquamarine; */
  height: 40rem;
`;

const StyledKoreasaursSizetImageLottie = styled.div`
  /* border: 1px solid pink; */
  position: absolute;
  width: 60rem;
  filter: invert(100%);
  top: 60rem;
  left: 10rem;
  transform: rotate(41deg);
`;

const StyledKoreasaursSizeText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
  position: absolute;
  top: 75rem;
  left: 25rem;
`;

const StyledKoreasaursSecondContent = styled.div`
  /* border: 1px solid pink; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  padding: 3rem;
  text-align: left;
`;

const StyledKoreasaursSecondSummary = styled.div`
  /* border: 1px solid red; */
  line-height: 150%;
  font-size: 1.2rem;
  padding-left: 1rem;
`;

const StyledKoreasaursThirdContent = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  padding: 5rem;
`;

const rotateBorder = keyframes`
  0% {
    transform: rotate(0deg);
    border-color: #E0ECED;
  }
  25% {
    border-color: #9CC0C4;
  }
  50% {
    border-color: #599198;
  }
  75% {
    border-color: #9CC0C4;
  }
  100% {
    transform: rotate(360deg);
    border-color: #E0ECED;
  }
`;

const StyledKoreasaursThirdBox = styled.div`
  width: 13rem;
  height: 13rem;
  border: 10px solid;
  border-radius: 100%;
  animation: ${rotateBorder} 3s linear infinite;
`;

export {
  StyledKoreasaurusPage,
  StyledKoreasaursFirstContent,
  StyledKoreasaurusTitle,
  StyledKoreasaursLittleTitle,
  StyledKoreasaursTitleNum,
  StyledKoreasaursSummary,
  StyledKoreasaursImage1,
  StyledKoreasaursImage2,
  StyledKoreasaursImage2LottieBackLine,
  StyledKoreasaursImage2LottieLine,
  StyledKoreasaursImage2LottieCircle,
  StyledKoreasaursImage2WeightText,
  StyledKoreasaursSizeContainer,
  StyledKoreasaursSizetImage,
  StyledKoreasaursSizetImageLottie,
  StyledKoreasaursSizeText,
  StyledKoreasaursSecondContent,
  StyledKoreasaursSecondSummary,
  StyledKoreasaursThirdContent,
  StyledKoreasaursThirdBox,
};
