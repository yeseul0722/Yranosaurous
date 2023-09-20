import styled from 'styled-components';

const StyledKoreaMapPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.night};
  display: flex;
  position: relative;
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
  font-family: ${(props) => props.theme.fonts.boldfont};
  text-align: left;
  padding-bottom: 0.5rem;
`;

const StyledKoreaMapText = styled.div`
  /* border: 1px solid aqua; */
  font-size: 30px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.boldfont};
  text-align: left;
  padding-left: 0.3rem;
`;

const StyledKoreaMap = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  /* align-items: end; */
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
  /* border: 1px solid yellow; */
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
`;

export {
  StyledKoreaMapPage,
  StyledKoreaMapContent,
  StyledKoreaMapTitleText,
  StyledKoreaMapText,
  StyledKoreaMap,
  StyledKoreaMapImg,
  StyledKoreaMapDs,
  StyledKoreaMapDsName,
};
