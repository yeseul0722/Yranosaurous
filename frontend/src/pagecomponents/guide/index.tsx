import React, { useEffect, useState } from 'react';
import { StyledGuidePage } from './Guide.styled';
import Map from '../guide/components/kakaomap';
import SideBar from './components/sidebar';
import { useLocation } from 'react-router-dom';
const GuideComponent = () => {
  const path = useLocation().pathname;

  return (
    <StyledGuidePage>
      <SideBar></SideBar>
      <Map></Map>
    </StyledGuidePage>
  );
};

export default GuideComponent;
