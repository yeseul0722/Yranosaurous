import React, { useEffect, useRef } from 'react';
import LandingExpo from './components/landingexpo';
import LandingDinosaur from './components/landingdinosaur';
import LandingStart from './components/landingstart';
import { StyledMainLanding, StyledMainLandingPage } from './MainLanding.styled';

const MainLanding = () => {
  const landingExpoRef = useRef<any>();

  useEffect(() => {
    const scrollTimeout = setTimeout(scrollToNextSection, 3000);
    return () => clearTimeout(scrollTimeout);
  }, []);

  const scrollToNextSection = () => {
    if (landingExpoRef.current) {
      landingExpoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledMainLanding>
      <StyledMainLandingPage>
        <LandingStart />
      </StyledMainLandingPage>
      <StyledMainLandingPage ref={landingExpoRef}>
        <LandingExpo />
      </StyledMainLandingPage>
      <StyledMainLandingPage>
        <LandingDinosaur />
      </StyledMainLandingPage>
    </StyledMainLanding>
  );
};

export default MainLanding;
