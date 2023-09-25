import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { StyledKakaoMapContainer } from './KakaoMap.styled';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const GosungKakaoMapComponent = () => {
  const place = useGuideStore((state: any) => state.place);
  const selectCategory = useGuideStore((state: any) => state.selectCategory);
  const [latitude, setLatitude] = useState(1);
  const [longitude, setLongitude] = useState(1);

  useEffect(() => {
    if (selectCategory === 'facility') {
      setLatitude(place.latitude);
      setLongitude(place.longitude);
    }
  }, [place]);
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
      level={4}
    >
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: latitude,
          lng: longitude,
        }}
      />
    </Map>
  );
};

export default GosungKakaoMapComponent;
