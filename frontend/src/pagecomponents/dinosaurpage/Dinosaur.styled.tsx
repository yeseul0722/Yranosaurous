import styled from 'styled-components';

const StyledDsPage = styled.div`
  height: 100vh;
  background-color: #ffffff;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const StyledDsLandingPage = styled.div`
  scroll-snap-align: start;
`;

const StyledDsFirstPage = styled.div`
  scroll-snap-align: start;
`;

export { StyledDsPage, StyledDsLandingPage, StyledDsFirstPage };
