import { keyframes } from '@emotion/react';
import { Opacity } from '@mui/icons-material';
import styled from 'styled-components';

const StyledLandingStartPage = styled.div`
  height: 100vh;
  background-color: #000020;
`;

const StyledLandingStartPageLogo = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  opacity: 0;
  animation: fadeIn 2s ease-in-out forwards;
  padding-top: 20rem;
  width: 40rem;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export { StyledLandingStartPage, StyledLandingStartPageLogo };
