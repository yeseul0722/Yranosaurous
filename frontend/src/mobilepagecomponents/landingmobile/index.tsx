import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledLandingMobile, StyledLandingExpoPage, StyledImgContainer, StyledImg } from './Landingexpo.styled';
import { motion } from 'framer-motion';
const LandingMobile = () => {
  const Router = useNavigate();
  useEffect(() => {
    // 1초 뒤에 다른 페이지로 이동
    const timer = setTimeout(() => {
      Router('/Expo'); // 다른 페이지 경로로 변경하세요.
    }, 2500);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearTimeout(timer);
  }, [history]);
  return (
    <StyledLandingMobile>
      <StyledLandingExpoPage>
        <StyledImgContainer>
          <StyledImg></StyledImg>
        </StyledImgContainer>
      </StyledLandingExpoPage>
    </StyledLandingMobile>
  );
};

export default LandingMobile;
