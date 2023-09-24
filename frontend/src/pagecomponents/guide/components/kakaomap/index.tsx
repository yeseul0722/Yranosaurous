import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { StyledKakaoMapContainer } from './KakaoMap.styled';

const GosungKakaoMapComponent = () => {
  return (
    <Map
      id="map"
      center={{
        lat: 35.057175,
        lng: 128.3975,
      }}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      level={3}
    />
  );
};

export default GosungKakaoMapComponent;
