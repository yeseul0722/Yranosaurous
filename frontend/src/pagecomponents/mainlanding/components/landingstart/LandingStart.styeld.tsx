import styled from 'styled-components';

const StyledLandingStartPage = styled.div`
  height: 100vh;
  background-color: #000020;
`;

const StyledLandingStartPageLogo = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  padding-top: 20rem;
  width: 40rem;
`;

export { StyledLandingStartPage, StyledLandingStartPageLogo };
