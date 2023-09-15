import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { StyledKakaoMapContainer } from './KakaoMap.styled';

const GosungKakaoMapComponent = () => {
  return (
    <StyledKakaoMapContainer>
      <Map
        id="map"
        center={{
          lat: 35.05935949688545,
          lng: 128.39945815291523,
        }}
        level={3}
      />
    </StyledKakaoMapContainer>
  );
};

export default GosungKakaoMapComponent;
