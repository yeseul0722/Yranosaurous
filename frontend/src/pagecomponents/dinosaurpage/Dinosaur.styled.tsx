import styled from 'styled-components';

const StyledDsPage = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

const StyledDsSide = styled.div`
  background-color: #fff;
  width: 5rem;
`;

const StyledDsContent = styled.div`
  overflow: auto;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledDsLandingPage = styled.div`
  scroll-snap-align: start;
  position: relative;
`;

const StyledLandingGoNextPageButton = styled.div`
  background-color: #3d5a61;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  width: 10rem;
  height: 3rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 25rem;
  left: 42rem;
`;

const StyledDsFirstPage = styled.div`
  scroll-snap-align: start;
`;

const StyledKoreaDsPage = styled.div`
  scroll-snap-align: start;
`;

const StyledKoreaMapPage = styled.div`
  scroll-snap-align: start;
`;

const StyledKoreaceratopsPage = styled.div`
  scroll-snap-align: start;
`;
const StyledKoreasaurusPage = styled.div`
  scroll-snap-align: start;
`;
const StyledPukyongsaurusPage = styled.div`
  scroll-snap-align: start;
`;

export {
  StyledDsPage,
  StyledDsContent,
  StyledDsSide,
  StyledDsLandingPage,
  StyledLandingGoNextPageButton,
  StyledDsFirstPage,
  StyledKoreaDsPage,
  StyledKoreaMapPage,
  StyledKoreaceratopsPage,
  StyledKoreasaurusPage,
  StyledPukyongsaurusPage,
};
