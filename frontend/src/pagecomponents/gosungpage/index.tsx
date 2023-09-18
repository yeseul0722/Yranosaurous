import React from 'react';
import GosungKakaoMapComponent from './components/kakaomap';
import GosungSideBar from './components/sidebar';
import { StyledGosungPage } from './Gosung.styled';

const GosungComponent = () => {
  return (
    <StyledGosungPage>
      <GosungSideBar />
      <GosungKakaoMapComponent />
    </StyledGosungPage>
  );
};

export default GosungComponent;
