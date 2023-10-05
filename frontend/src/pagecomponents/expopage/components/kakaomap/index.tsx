import React, { useEffect, useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import {
  StyledKakaoMapContainer,
  StyledMarkerContentContainer,
  StyledImageContainer,
  StyledImage,
  StyledContent,
} from './KakaoMap.styled';
import useGuideStore from '../../../../stores/guide/useGuideStore';
// import PlaceModal from '../placemodal';
const ExpoMainMapComponent = () => {
  const festival = useGuideStore((state: any) => state.festival);
  const [latitude, setLatitude] = useState(1);
  const [longitude, setLongitude] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const imageArray = [
    'dino',
    '3d',
    'biking',
    'cafe',
    'baby',
    'food',
    'foodcart',
    'museum',
    'park',
    'plant',
    'play',
    'stroller',
    'toilet',
    'ticket',
    'drawing',
    'bridge',
  ];

  useEffect(() => {
    setIsOpen(false);
    // console.log(festival);
  }, [festival]);
  const handleOpen = (e: any) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLatitude(festival.latitude);
    setLongitude(festival.longitude);
  }, [festival]);

  return (
    <Map
      id="map"
      center={{
        lat: 35.058039,
        lng: 128.400407,
      }}
      style={{
        width: '500px',
        height: '500px',
      }}
    >
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: latitude,
          lng: longitude,
        }}
        image={{
          src: `/markers/${imageArray[festival.markerNumber - 1]}.png`, // 마커이미지의 주소입니다
          size: {
            width: 40,
            height: 40,
          },
          options: {
            offset: {
              x: 20,
              y: 20,
            },
          },
        }}
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        onClick={handleOpen}
      />
    </Map>
  );
};

export default ExpoMainMapComponent;
