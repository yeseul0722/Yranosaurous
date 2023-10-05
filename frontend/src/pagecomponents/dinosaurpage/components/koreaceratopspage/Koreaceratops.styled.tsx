import styled from 'styled-components';

const StyledKoreaceratopsPage = styled.div`
  height: 100vh;
  /* background-color: ${(props) => props.theme.colors.main}; */
  background-image: url('/dinosaur/ceratopsBackground.png');
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const StyledCeratopsTitleNum = styled.div`
  /* border: 0.8rem solid #324247; */
  color: #72573a;
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
  left: 28rem;
`;

const StyledCeratopsFirstContent = styled.div`
  /* border: 1px solid red; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  text-align: left;
  padding-top: 7rem;
  padding-left: 35rem;
  padding-right: 5rem;
  z-index: 50;
  cursor: default;
`;

const StyledCeratopsTitle = styled.div`
  /* border: 1px solid blue; */
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const StyledCeratopsLittleTitle = styled.div`
  /* border: 1px solid pink; */
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
`;

const StyledCeratopsSummary = styled.div`
  /* border: 1px solid yellow; */
  font-size: 1.2rem;
  line-height: 150%;
`;

const StyledCeratopsSizeContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  margin-top: -5rem;
`;

const StyledCeratopsSizeImgContainer = styled.div`
  padding: 5rem;
`;

const StyledCeratopsSecondContent = styled.div`
  /* border: 1px solid red; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  text-align: left;
  margin-top: 10rem;
  padding-left: 10rem;
  /* padding-right: 50rem; */
`;

const StyledCeratopsImage1 = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  /* border: 1px solid aquamarine; */
  position: absolute;
  left: 4rem;
  top: -1rem;
  width: 28rem;
`;

const StyledCeratopsSizeImage1 = styled.img.attrs<any>((props) => ({
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
const StyledCeratopsLottieLength = styled.div`
  width: 43rem;
  filter: invert(100%);
  position: absolute;
  top: 30rem;
  right: 3rem;
`;

const StyledCeratopsLengthText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
  position: absolute;
  top: 45rem;
  right: 12rem;
`;

const StyledCeratopsLottieWeight = styled.div`
  width: 5rem;
  position: absolute;
  top: 31rem;
  right: 22rem;
`;

const StyledCeratopsWeightText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
  position: absolute;
  top: 29rem;
  right: 15rem;
`;

export {
  StyledKoreaceratopsPage,
  StyledCeratopsTitleNum,
  StyledCeratopsFirstContent,
  StyledCeratopsSecondContent,
  StyledCeratopsSizeContainer,
  StyledCeratopsSizeImgContainer,
  StyledCeratopsTitle,
  StyledCeratopsLittleTitle,
  StyledCeratopsSummary,
  StyledCeratopsImage1,
  StyledCeratopsSizeImage1,
  StyledCeratopsLottieLength,
  StyledCeratopsLengthText,
  StyledCeratopsLottieWeight,
  StyledCeratopsWeightText,
};
