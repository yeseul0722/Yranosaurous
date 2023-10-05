import React, { useEffect, useRef } from 'react';
import LandingExpo from './components/landingexpo';
import LandingDinosaur from './components/landingdinosaur';
import LandingStart from './components/landingstart';
import { StyledMainLanding, StyledMainLandingPage } from './LandingMain.styled';
import LandingMobile from '../../mobilepagecomponents/landingmobile';
import { useMediaQuery } from 'react-responsive';

const MainLanding = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
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
    <>
      {!isMobile ? (
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
      ) : (
        <LandingMobile></LandingMobile>
      )}
    </>
  );
};

export default MainLanding;
