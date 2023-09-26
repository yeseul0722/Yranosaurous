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
      <StyledLandingTitleText>
        온라인으로 즐기는 <br /> 세계와 한국의 공룡 탐험
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
