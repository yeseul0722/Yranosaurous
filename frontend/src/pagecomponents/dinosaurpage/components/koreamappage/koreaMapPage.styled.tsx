import styled, { css } from 'styled-components';

const StyledKoreaMapPage = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const selectDsName = props.selectDsName;
    const selectDs: any = {
      koreanosaurus: `
      background-image: url('/dinosaur/koreaBack/koreasaurs2.png');
      background-size: contain;
      `,
      koreaceratops: `
      background-image: url('/dinosaur/koreaBack/ceratops2.png');
      background-size: contain;
      `,
      pukyongosaurus: `
      background-image: url('/dinosaur/koreaBack/puky2.png');
      background-size: contain;
      `,
    };
    return css`
      height: auto;
      background-color: ${(props) => props.theme.colors.night};
      display: flex;
      flex-direction: column;
      position: relative;
      ${selectDs[selectDsName]};
    `;
  }}
`;

const StyledKoreaMapContent = styled.div`
  /* border: 1px solid red; */
  margin: 3rem;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const StyledKoreaMapTitleText = styled.div`
  /* border: 1px solid red; */
  font-size: 60px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  text-align: left;
  padding-bottom: 0.5rem;
  cursor: default;
`;

const StyledKoreaMapText = styled.div`
  /* border: 1px solid aqua; */
  font-size: 30px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  text-align: left;
  padding-left: 0.3rem;
  margin-bottom: 3rem;
`;

const StyledKoreaMapSelect = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  cursor: pointer;
  z-index: 100;

  ${({ id }) => {
    if (id === 'koreanosaurus') {
      return `
        color: #9CC0C4;
      `;
    } else if (id === 'koreaceratops') {
      return `
        color: #C4DBDD;
      `;
    } else {
      return `
        color: #599198;
      `;
    }
  }}
`;

const StyledKoreaMapSelectNumber = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  width: 4rem;
`;

const StyledKoreaMApSelectContentBox = styled.div`
  /* border: 1px solid blue; */
  /* border-left: 5px solid ${(props) => props.theme.colors.white}; */
  margin-left: 3px;
  padding-left: 10px;
  ${({ id }) => {
    if (id === 'koreanosaurus') {
      return `
        border-left: 5px solid #9CC0C4;
      `;
    } else if (id === 'koreaceratops') {
      return `
        border-left: 5px solid #C4DBDD;
      `;
    } else {
      return `
        border-left: 5px solid #599198;
      `;
    }
  }}
`;

const StyledKoreaMapSelectTitle = styled.div`
  font-size: 1.8rem;
  text-align: left;
`;

const StyledKoreaMapSelectText = styled.div`
  font-size: 1rem;
  text-align: left;
`;

const StyledKoreaMapSelectLottie = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const selectDsName = props.selectDsName;
    const selectDs: any = {
      koreaceratops: `
      visibility : visible;
      top : 15rem;
      left : 56rem
    `,
      pukyongosaurus: `
      visibility : visible;
      top : 32rem;
      left : 63rem
      `,
      koreanosaurus: `
      visibility : visible;
      top : 35rem;
      left : 55rem;
      `,
    };
    return css`
      position: absolute;
      visibility: hidden;
      height: 5rem;
      width: 5rem;
      filter: invert(100%);
      ${selectDs[selectDsName]};
    `;
  }}
`;

const StyledKoreaMap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const StyledKoreaMapImg = styled.img`
  /* border: 1px solid darkblue; */
  width: 35rem;
  height: 40rem;
`;

const StyledKoreaMapDs = styled.div`
  border: 1px solid green;
  position: absolute;
  top: 30rem;
  left: 15rem;
`;

const StyledKoreaMapDsName = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
`;

const StyledKoreaMapBackgroundLottie = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  transform: scaleX(-1);
  margin-top: 78vh;
  /* margin-left: 45vw; */
`;

const StyledDsPageContainer = styled.div`
  /* overflow: auto;
  scroll-snap-type: y mandatory; */
  height: 100vh;
  position: relative;
`;

const StyledDsSelectNumBox = styled.div`
  /* width: 5rem; */
  top: 1rem;
  left: 2rem;
  position: absolute;
  top: 1.5rem;
  z-index: 99;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 1.5rem;
  cursor: pointer;
`;

export {
  StyledKoreaMapPage,
  StyledKoreaMapContent,
  StyledKoreaMapTitleText,
  StyledKoreaMapSelect,
  StyledKoreaMapSelectTitle,
  StyledKoreaMapSelectText,
  StyledKoreaMapSelectNumber,
  StyledKoreaMApSelectContentBox,
  StyledKoreaMapSelectLottie,
  StyledKoreaMapText,
  StyledKoreaMap,
  StyledKoreaMapImg,
  StyledKoreaMapDs,
  StyledKoreaMapDsName,
  StyledKoreaMapBackgroundLottie,
  StyledDsSelectNumBox,
  StyledDsPageContainer,
};
