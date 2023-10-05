import React, { useState, useEffect } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { StyledInfoWindow, StyledKakaoMapContainer, StyledMarkerContainer } from './KakaoMap.styled';
import { useRestaurantStore } from '../../../../stores/gosung/restaurants/useRestaurantApiStore';
import { useCategoryStore } from '../../../../stores/gosung/useCategoryStore';
import { useAccommodationApiStore } from '../../../../stores/gosung/accommodation/useAccommodationApiStore';
import { useTourismStore } from '../../../../stores/gosung/tourism/useTourismApiStore';
import { useCategoryDetailStore } from '../../../../stores/gosung/useCategoryDetailStore';
import { useRestaurantDetailStore } from '../../../../stores/gosung/restaurants/useRestaurantDetailApiStore';
import { useAccommodationDetailStore } from '../../../../stores/gosung/accommodation/useAccommodationDetailStore';
import { useTourismDetailStore } from '../../../../stores/gosung/tourism/useTourismDetailStore';

const GosungKakaoMapComponent = () => {
  const { restaurantList } = useRestaurantStore();
  const { motelData, pensionData, guesthouseData } = useAccommodationApiStore();
  const { tourismList } = useTourismStore();
  const { selectedCategory } = useCategoryStore();
  const { selectedDetail } = useCategoryDetailStore();
  const { restaurantDetail } = useRestaurantDetailStore();
  const { accommodationDetail } = useAccommodationDetailStore();
  const { tourismDetail } = useTourismDetailStore();
  const [markers, setMarkers] = useState<any[]>([]); //좌표로 변환한 값 담는 리스트
  const [center, setCenter] = useState({ lat: 35.057175, lng: 128.3975 });

  // 주소들 좌표로 변환하기
  useEffect(() => {
    const geocodeAddresses = async () => {
      setMarkers([]); // 마커 초기화
      let locationList = [];
      let detailAddress;

      let latSum = 0;
      let lngSum = 0;

      if (typeof selectedCategory === 'number' && selectedCategory >= 1 && selectedCategory <= 15) {
        locationList = restaurantList;
        detailAddress = restaurantDetail.address;
      } else {
        switch (selectedCategory) {
          case '모텔':
            locationList = motelData;
            detailAddress = accommodationDetail.address;
            break;
          case '펜션':
            locationList = pensionData;
            detailAddress = accommodationDetail.address;
            break;
          case '게스트하우스':
            locationList = guesthouseData;
            detailAddress = accommodationDetail.address;
            break;
          case 'MOUNTAIN':
          case 'NATURAL':
          case 'CAMPING':
          case 'PARK':
          case 'MUSEUM':
          case 'TEMPLE':
          case 'AUDITORIUM':
          case 'OLD_HOUSE':
            locationList = tourismList;
            detailAddress = tourismDetail.address;
            break;
        }
      }

      const newMarkers = [];

      for (const item of locationList) {
        const result: any = await new Promise((resolve, reject) => {
          geocoder.addressSearch(item.address, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
              resolve(result);
            } else {
              resolve([]);
            }
          });
        });
        if (result.length > 0) {
          newMarkers.push({
            position: result[0],
            name: item.storeName || item.name, // restaurantList에서는 storeName을 사용하고 나머지에서는 name을 사용.
          });

          latSum += parseFloat(result[0].y);
          lngSum += parseFloat(result[0].x);
        }
      }
      setMarkers(newMarkers);
      if (newMarkers.length > 0) {
        const avgLat = latSum / newMarkers.length;
        const avgLng = lngSum / newMarkers.length;

        setCenter({ lat: avgLat, lng: avgLng });
      }
      if (detailAddress) {
        geocoder.addressSearch(detailAddress, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const position = result[0];
            setCenter({ lat: parseFloat(position.y), lng: parseFloat(position.x) - 0.004 });
          }
        });
      }
    };
    geocodeAddresses();
  }, [selectedCategory, restaurantList, tourismList, motelData, pensionData, guesthouseData, selectedDetail]);

  const geocoder = new kakao.maps.services.Geocoder();

  return (
    <Map
      id="map"
      center={center}
      style={{
        width: '100%',
        height: '100vh',
      }}
      level={7}
    >
      {markers &&
        markers.map((marker, index) => (
          <StyledMarkerContainer key={index}>
            <MapMarker
              position={{ lat: marker.position.y, lng: marker.position.x }}
              image={{
                src: `/kakaomap/${selectedCategory}.png`, // 마커이미지의 주소입니다
                size: {
                  width: 35,
                  height: 35,
                }, // 마커이미지의 크기입니다
                options: {
                  offset: {
                    x: 17.5,
                    y: 17.5,
                  }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                },
              }}
            />
            <CustomOverlayMap position={{ lat: marker.position.y, lng: marker.position.x }} yAnchor={1.5}>
              <StyledInfoWindow>
                {marker.name} <br />
              </StyledInfoWindow>
            </CustomOverlayMap>
          </StyledMarkerContainer>
        ))}
    </Map>
  );
};

export default GosungKakaoMapComponent;
