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
import { motion } from 'framer-motion';
const ExpoMobile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1, // 애니메이션의 지속 시간 (초 단위)
        // ease: 'easeIn', // 이징 함수 (예: "easeInOut", "linear", "easeIn")
      }}
    >
      <StyledExpoMobilePage>
        <NavbarComponent></NavbarComponent>
        <MainTitle></MainTitle>
        <MobileCarousel></MobileCarousel>
        <ExpoInformation></ExpoInformation>
        <EventVenue></EventVenue>
        <Ticket></Ticket>
        <Tourism></Tourism>
        <Performance></Performance>
        <div style={{ height: '30px' }}></div>
      </StyledExpoMobilePage>
    </motion.div>
  );
};

export default ExpoMobile;
