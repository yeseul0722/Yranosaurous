import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { StyledKakaoMapContainer } from './KakaoMap.styled';

const GosungKakaoMapComponent = () => {
  return (
    <Map
      id="map"
      center={{
        lat: 35.05935949688545,
        lng: 128.39945815291523,
      }}
      style={{
        width: '95vw',
        height: '100vh',
      }}
      level={3}
    />
  );
};

export default GosungKakaoMapComponent;
