import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { StyledKakaoMapContainer } from './KakaoMap.styled';
import { useRestaurantStore } from '../../../../stores/restaurants/useRestaurantApiStore';

interface GeocoderResult {
  y: any;
  x: any;
}

const GosungKakaoMapComponent: React.FC = () => {
  const { restaurantList } = useRestaurantStore();
  const [markers, setMarkers] = useState<JSX.Element[]>([]);

  console.log(markers, 'markers');

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    restaurantList.forEach((restaurant) => {
      geocoder.addressSearch(
        restaurant.address,
        function (result: GeocoderResult[], status: kakao.maps.services.Status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK && result[0]) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            setMarkers((prev) => [
              ...prev,
              <MapMarker
                key={`${coords.getLat()}-${coords.getLng()}`}
                position={{
                  lat: coords.getLat(),
                  lng: coords.getLng(),
                }}
                clickable={true}
              />,
            ]);
          }
        },
      );
    });
  }, [restaurantList]);

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
    >
      {markers}
    </Map>
  );
};

export default GosungKakaoMapComponent;
