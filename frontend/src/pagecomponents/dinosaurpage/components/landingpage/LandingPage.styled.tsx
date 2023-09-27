import styled from 'styled-components';

const StyledDsLandingPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.night};
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledLandingPagescreen = styled.div`
  /* background-color: #ffffff68;
  z-index: 100;
  height: 100vh;
  position: absolute; */
`;

const StyledLandingTitleText = styled.div`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 150px;
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 4rem;
  line-height: 150%;
  cursor: default;
`;

const StyledLandingGlobe = styled.div`
  margin-top: 26rem;
`;

export { StyledDsLandingPage, StyledLandingPagescreen, StyledLandingGlobe, StyledLandingTitleText };
