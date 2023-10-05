import styled from 'styled-components';

const StyledLandingExpoPage = styled.div`
  background-image: url('/landing/landingexpoback.png');
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLandingExpoContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 32rem; */
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledLandingExpoPageLogoBox = styled.div`
  margin-bottom: 1rem;
`;

const StyledLandingExpoPageLogo = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 40rem;
`;

const StyledLandingExpoContentText = styled.div`
  font-size: 24px;
  text-align: left;
`;

const StyledLandingExpoLinkButton = styled.div`
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.main};
  width: 15rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-top: 2rem;
  cursor: pointer;
`;

const StyledLandingExpoWindow = styled.div`
  border-radius: 30px;
  width: 300px;
  height: 600px;
`;
const StyledLandingVideoContainer = styled.div`
  width: 320px;
  height: 620px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  StyledLandingExpoPage,
  StyledLandingExpoPageLogoBox,
  StyledLandingExpoPageLogo,
  StyledLandingExpoContentBox,
  StyledLandingExpoContentText,
  StyledLandingExpoLinkButton,
  StyledLandingExpoWindow,
  StyledLandingVideoContainer,
};
