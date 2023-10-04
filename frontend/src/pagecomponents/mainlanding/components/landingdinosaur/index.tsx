import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledLandingDinosaurLogo,
  StyledLandingDinosaurContent,
  StyledLandingDinosaurPage,
  StyledLandingGlobe,
  StyledLandingDinosaurText,
  StyledLandingDinosaurLinkButton,
} from './LandingDinosaur.styled';
import Globe from 'react-globe.gl';

const LandingDinosaur = () => {
  const globeEl = useRef<any>();
  useEffect(() => {
    // 자동 회전
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    const MAP_CENTER = { lat: 160, lng: 310, altitude: 1.7 };
    globeEl.current.pointOfView(MAP_CENTER, 0);
  });
  return (
    <StyledLandingDinosaurPage>
      <StyledLandingDinosaurContent>
        <StyledLandingDinosaurLogo src="/landing/mainlogo.png" alt="landinglogo" />
        <StyledLandingDinosaurText>세계 공룡정보부터 한국 공룡의 상세정보까지 확인해보세요!</StyledLandingDinosaurText>
        <StyledLandingDinosaurLinkButton>
          <Link to="/Dinosaur" style={{ textDecoration: 'none', color: '#F3F8F8' }}>
            입장하기
          </Link>
        </StyledLandingDinosaurLinkButton>
      </StyledLandingDinosaurContent>
      <StyledLandingGlobe>
        <Globe
          ref={globeEl}
          width={1000}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          backgroundColor="#00000062"
        />
      </StyledLandingGlobe>
      {/* </StyledLandingPagescreen> */}
    </StyledLandingDinosaurPage>
  );
};

export default LandingDinosaur;
