import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledLandingExpoContentBox,
  StyledLandingExpoContentText,
  StyledLandingExpoLinkButton,
  StyledLandingExpoPage,
  StyledLandingExpoPageLogo,
  StyledLandingExpoPageLogoBox,
  StyledLandingExpoWindow,
  StyledLandingVideoContainer,
} from './Landingexpo.styled';

const LandingExpo = () => {
  return (
    <StyledLandingExpoPage>
      <StyledLandingExpoContentBox>
        <StyledLandingExpoPageLogoBox>
          <StyledLandingExpoPageLogo src="/landing/mainlogo.png" alt="landinglogo" />
        </StyledLandingExpoPageLogoBox>
        <StyledLandingExpoContentText>
          상상 그 이상의 공룡세계, 2023 경남고성공룡세계엑스포
          <br />
          <br />
          와이라노사우루스는 경남고성공룡세계엑스포의 정보부터
          <br />
          세계의 공룡 정보를 제공해주는 서비스입니다.
        </StyledLandingExpoContentText>
        <StyledLandingExpoLinkButton>
          <Link to="/Expo" style={{ textDecoration: 'none', color: '#F3F8F8' }}>
            정보확인하러가기
          </Link>
        </StyledLandingExpoLinkButton>
      </StyledLandingExpoContentBox>
      <StyledLandingVideoContainer>
        <StyledLandingExpoWindow>
          <video loop autoPlay muted style={{ height: '100%', width: '100%', borderRadius: '30px' }}>
            <source src="/landing/MobileYrano.mp4" type="video/mp4" />
          </video>
        </StyledLandingExpoWindow>
      </StyledLandingVideoContainer>
    </StyledLandingExpoPage>
  );
};

export default LandingExpo;
