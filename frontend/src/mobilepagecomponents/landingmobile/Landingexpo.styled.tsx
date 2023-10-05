import styled from 'styled-components';

const StyledLandingMobile = styled.div``;

const StyledLandingExpoPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000020;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImgContainer = styled.div`
  width: 90%;
  height: auto;
`;
const StyledImg = styled.img.attrs<any>((props) => ({
  src: '/mobile/mainlogo.png',
}))`
  width: 100%;
  height: 100%;
  animation: fadeIn 2s ease-in-out forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export { StyledLandingMobile, StyledLandingExpoPage, StyledImgContainer, StyledImg };
