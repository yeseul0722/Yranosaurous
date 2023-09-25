import React, { useRef, useEffect } from 'react';
import {
  StyledDsLandingPage,
  StyledLandingPagescreen,
  StyledLandingGlobe,
  StyledLandingTitleText,
} from './LandingPage.styled';
import Globe from 'react-globe.gl';

const LandingPage = () => {
  const globeEl = useRef<any>();
  useEffect(() => {
    // 자동 회전
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    const MAP_CENTER = { lat: 160, lng: 310, altitude: 1.7 };
    globeEl.current.pointOfView(MAP_CENTER, 0);
  });
  return (
    <StyledDsLandingPage>
      {/* <StyledLandingPagescreen> */}
      <StyledLandingTitleText>
        우리 지구🌍에는 <br /> 어떤 공룡들이 살았을까?
      </StyledLandingTitleText>
      <StyledLandingGlobe>
        <Globe
          ref={globeEl}
          width={1000}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          backgroundColor="#000020"
        />
      </StyledLandingGlobe>
      {/* </StyledLandingPagescreen> */}
    </StyledDsLandingPage>
  );
};

export default LandingPage;
