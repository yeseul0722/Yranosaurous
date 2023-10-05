import styled from 'styled-components';

const StyledMainLanding = styled.div`
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledMainLandingPage = styled.div`
  scroll-snap-align: start;
`;

export { StyledMainLanding, StyledMainLandingPage };
