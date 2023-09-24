import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { StyledKakaoMapContainer } from './KakaoMap.styled';
import { useRestaurantStore } from '../../../../stores/restaurants/useRestaurantApiStore';
import { log } from 'console';

const GosungKakaoMapComponent = () => {
  const { restaurantList } = useRestaurantStore();

  return (
    <Map
      id="map"
      center={{
        lat: 35.057175,
        lng: 128.3975,
      }}
      style={{
        width: '100%',
        height: '100vh',
      }}
      level={3}
    />
  );
};

export default GosungKakaoMapComponent;
