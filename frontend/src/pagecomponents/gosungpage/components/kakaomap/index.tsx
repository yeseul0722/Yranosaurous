import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { StyledKakaoMapContainer } from './KakaoMap.styled';
import { useRestaurantStore } from '../../../../stores/gosung/restaurants/useRestaurantApiStore';

const GosungKakaoMapComponent = () => {
  const { restaurantList } = useRestaurantStore();
  const [markers, setMarkers] = useState<any[]>([]); //좌표로 변환한 값 담는 리스트

  //restaurantlist에서 주소들 좌표로 변환하기
  useEffect(() => {
    const geocodeAddresses = async () => {
      const newMarkers = [];
      for (const restaurant of restaurantList) {
        const result: any = await new Promise((resolve, reject) => {
          geocoder.addressSearch(restaurant.address, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
              resolve(result);
            }
          });
        });
        if (result.length > 0) {
          newMarkers.push(result[0]);
        }
      }
      setMarkers(newMarkers);
    };
    geocodeAddresses();
  }, [restaurantList]);

  console.log(markers, 'markers');

  const geocoder = new kakao.maps.services.Geocoder();

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
      {markers && markers.map((marker, index) => <MapMarker key={index} position={{ lat: marker.y, lng: marker.x }} />)}
    </Map>
  );
};

export default GosungKakaoMapComponent;
