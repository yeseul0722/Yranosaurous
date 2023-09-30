import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { StyledKakaoMapContainer } from './KakaoMap.styled';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const GosungKakaoMapComponent = () => {
  const place = useGuideStore((state: any) => state.place);
  const selectCategory = useGuideStore((state: any) => state.selectCategory);
  const positions = useGuideStore((state: any) => state.positions);
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

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (selectCategory === 'facility' || selectCategory === 'preview') {
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
      {(selectCategory === 'facility' || selectCategory === 'preview') && (
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: latitude,
            lng: longitude,
          }}
          image={{
            src: `/markers/${imageArray[place.markerNumber - 1]}.png`, // 마커이미지의 주소입니다
            size: {
              width: 50,
              height: 50,
            }, // 마커이미지의 크기입니다
          }}
        />
      )}
      {selectCategory === 'cource' &&
        positions.map((position: any, index: any) => (
          <MapMarker
            key={`${position.title}-${position.latlng}`}
            position={position.latlng} // 마커를 표시할 위치
            image={{
              src: `/markers/${imageArray[position.markerNumber - 1]}.png`, // 마커이미지의 주소입니다
              size: {
                width: 50,
                height: 50,
              }, // 마커이미지의 크기입니다
            }}
            clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
            onClick={handleOpen}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))}
      {(selectCategory === 'facility' || selectCategory === 'preview') && isOpen && null}
      {selectCategory === 'cource' && isOpen && null}
      {/* 이미지 여기에 모달로 넣기 */}
    </Map>
  );
};

export default GosungKakaoMapComponent;
