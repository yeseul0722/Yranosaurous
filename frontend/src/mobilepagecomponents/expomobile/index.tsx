import React, { useEffect, useState } from 'react';
import { StyledExpoMobilePage } from './ExpoMobile.styled';
import NavbarComponent from './components/navbar';

import MobileCarousel from './components/maincarousel';
import ExpoInformation from './components/expoinformation';
import EventVenue from './components/eventvenue';
import Ticket from './components/ticket';
import Tourism from './components/tourism';
import Performance from './components/performance';
import MainTitle from './components/maintitle';
const ExpoMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledExpoMobilePage>
      <NavbarComponent handleSideBar={handleSideBar}></NavbarComponent>
      <MainTitle></MainTitle>
      <MobileCarousel></MobileCarousel>
      <ExpoInformation></ExpoInformation>
      <EventVenue></EventVenue>
      <Ticket></Ticket>
      <Tourism></Tourism>
      <Performance></Performance>
      <div style={{ height: '30px' }}></div>
    </StyledExpoMobilePage>
  );
};

export default ExpoMobile;
