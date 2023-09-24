import styled from 'styled-components';

const StyledKoreasaurusPage = styled.div`
  height: 100%;
  /* background-color: ${(props) => props.theme.colors.night}; */
  /* background-image: url('/dinosaur/backgroundimg.jpg'); */
  background: rgba(0, 0, 0, 0.5) url('/dinosaur/background.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const StyledKoreasaurusPageFirst = styled.div`
  height: 100vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
`;

const StyledKoreasaurusPageSecond = styled.div`
  height: 100vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding-right: 5rem;
  padding-left: 5rem;
`;

const StyledKoreasaurusBody = styled.div`
  /* border: 1px solid red; */
  padding-top: 5rem;
  padding-left: 5rem;
  text-align: left;
  position: relative;
`;

const StyledKoreasaurusGeneration = styled.div`
  border: 1px solid yellow;
`;

const StyledKoreasaursTag = styled.div`
  /* border: 1px solid green; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 1.5rem;
  margin: 1rem;
`;

const StyledKoreasaursTitleNumber = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 11rem;
  /* left: 1rem; */
  color: #000000;
  font-size: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledKoreasaurusTitle = styled.div`
  /* border: 1px solid yellowgreen; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
  margin-left: 1rem;
  margin-bottom: 3rem;
  z-index: 100;
`;

const StyledKoreasaurusLittleTitle = styled.div`
  /* border: 1px solid yellowgreen; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 2rem;
  margin-left: 1rem;
  margin-top: 3rem;
`;

const StyledKoreasaurusContent = styled.div`
  /* border: 1px solid blue; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 1.3rem;
  line-height: 150%;
  margin: 1rem;
`;

const StyledKoreasaurusFigure = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  position: relative;
`;

const StyledKoreasaurusImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  /* border: 1px solid aquamarine; */
  width: 45rem;
  height: 48rem;
  object-fit: fill;
`;

const StyledKoreasaurusCircle = styled.div`
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: 30rem;
  left: 22rem;
  filter: invert(80%);
`;
const StyledKoreasaurusCircleWeight = styled.div`
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: 20rem;
  left: 10rem;
  filter: invert(80%);
`;

const StyledKoreasaurusLine = styled.div`
  width: 20rem;
  position: absolute;
  top: 29rem;
  left: 16rem;
  filter: invert(100%);
`;
const StyledKoreasaurusLineWeight = styled.div`
  width: 20rem;
  position: absolute;
  top: 19rem;
  left: 4rem;
  filter: invert(100%);
`;

const StyledKoreasaurusInfo = styled.div`
  border: 1px solid orange;
  height: 10rem;
  display: flex;
`;

const StyledKoreasaurusHeight = styled.div`
  /* border: 1px solid blue; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  position: absolute;
  top: 45rem;
  left: 24rem;
  font-size: 2rem;
`;
const StyledKoreasaurusWeight = styled.div`
  /* border: 1px solid blue; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  position: absolute;
  top: 35rem;
  left: 11rem;
  font-size: 2rem;
`;

const StyledKoreaSaursGoWatch = styled.div`
  /* border: 1px solid red; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  margin-top: 3rem;
`;

export {
  StyledKoreasaurusPage,
  StyledKoreasaurusPageFirst,
  StyledKoreasaurusPageSecond,
  StyledKoreasaurusBody,
  StyledKoreasaurusGeneration,
  StyledKoreasaursTag,
  StyledKoreasaurusTitle,
  StyledKoreasaursTitleNumber,
  StyledKoreasaurusLittleTitle,
  StyledKoreasaurusContent,
  StyledKoreasaurusFigure,
  StyledKoreasaurusCircle,
  StyledKoreasaurusCircleWeight,
  StyledKoreasaurusLine,
  StyledKoreasaurusLineWeight,
  StyledKoreasaurusImg,
  StyledKoreasaurusInfo,
  StyledKoreasaurusHeight,
  StyledKoreasaurusWeight,
  StyledKoreaSaursGoWatch,
};
