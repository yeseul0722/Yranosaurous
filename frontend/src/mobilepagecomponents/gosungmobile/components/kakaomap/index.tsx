import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGosungListStore from '../../../../stores/mobilegosung/useGosungListStore';
import Modal from '../../../../mobilecomponents/modal';

const GosungKakaoMapComponent = () => {
  const [markers, setMarkers] = useState<any[]>([]);
  const [map, setMap] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const restaurantDetail = useGosungListStore((state: any) => state.restaurantDetail);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(`${restaurantDetail.address}`, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        const markers = [];

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, restaurantDetail.address]);
  return (
    <Map
      center={{
        lat: 35.057175,
        lng: 128.3975,
      }}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      level={4}
      onCreate={setMap}
    >
      {markers.map((marker: any) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          onClick={handleOpen}
          image={{
            src: 'map/marker.svg', // 마커이미지의 주소입니다
            size: {
              width: 40,
              height: 40,
            }, // 마커이미지의 크기입니다
          }}
        ></MapMarker>
      ))}
      {isOpen && <Modal handleOpen={handleOpen} restaurantDetail={restaurantDetail}></Modal>}
    </Map>
  );
};

export default GosungKakaoMapComponent;
