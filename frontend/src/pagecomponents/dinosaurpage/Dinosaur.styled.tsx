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

export {
  StyledDsPage,
  StyledDsContent,
  StyledDsSide,
  StyledDsLandingPage,
  StyledDsFirstPage,
  StyledKoreaDsPage,
  StyledKoreaMapPage,
  StyledKoreaceratopsPage,
};
