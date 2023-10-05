import styled from 'styled-components';

const StyledLandingDinosaurPage = styled.div`
  height: 100vh;
  /* background-color: ${(props) => props.theme.colors.night}; */
  background-image: url(/landing/mainlanding.png);
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledLandingDinosaurContent = styled.div`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 150px;
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  line-height: 150%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

const StyledLandingDinosaurLogo = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 40rem;
  margin-bottom: 1rem;
`;

const StyledLandingDinosaurText = styled.div`
  cursor: default;
  font-size: 24px;
`;

const StyledLandingDinosaurLinkButton = styled.div`
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

const StyledLandingGlobe = styled.div`
  padding-top: 28rem;
`;

export {
  StyledLandingDinosaurPage,
  StyledLandingDinosaurContent,
  StyledLandingDinosaurLogo,
  StyledLandingDinosaurLinkButton,
  StyledLandingGlobe,
  StyledLandingDinosaurText,
};
