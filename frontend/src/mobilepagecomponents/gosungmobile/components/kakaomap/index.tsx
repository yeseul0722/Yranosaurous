import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGosungListStore from '../../../../stores/mobilegosung/useGosungListStore';
import RestaurantModal from '../restaurantmodal';
import TourModal from '../tourmodal';
import LodgmentModal from '../lodgmentmodal';
import { StyledInfoWindow } from './KakaoMap.styled';
const GosungKakaoMapComponent = () => {
  const [markers, setMarkers] = useState<any[]>([]);
  const [map, setMap] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const restaurantDetail = useGosungListStore((state: any) => state.restaurantDetail);
  const tourDetail = useGosungListStore((state: any) => state.tourDetail);
  const lodgmentDetail = useGosungListStore((state: any) => state.lodgmentDetail);
  const selectList = useGosungListStore((state: any) => state.selectList);
  const resetLodgmentDetail = useGosungListStore((state: any) => state.resetLodgmentDetail);
  const resetTourDetail = useGosungListStore((state: any) => state.resetTourDetail);
  const resetRestaurantDetail = useGosungListStore((state: any) => state.resetRestaurantDetail);
  const [keyword, setKeyword] = useState('');
  const imageArray = [
    '밥집',
    '카페',
    '술집',
    '고깃집',
    '횟집',
    '한식',
    '중식',
    '일식',
    '양식',
    '이탈리안',
    '패스트푸드',
    '분식',
    '국물요리',
    '면요리',
    '해산물',
  ];

  useEffect(() => {
    setIsOpen(false);
    setMarkers([]); // 기존 마커를 제거합니다.
  }, [selectList]);

  useEffect(() => {
    if (selectList === 'restaurant') {
      setKeyword(restaurantDetail.address);
      resetTourDetail();
      resetLodgmentDetail();
    } else if (selectList === 'tour') {
      setKeyword(tourDetail.address);
      resetRestaurantDetail();
      resetLodgmentDetail();
    } else if (selectList === 'lodgment') {
      setKeyword(lodgmentDetail.address);
      resetRestaurantDetail();
      resetTourDetail();
    }
  }, [
    selectList,
    restaurantDetail.address, // 이 부분을 추가해 변경을 감지합니다.
    tourDetail.address, // 이 부분을 추가해 변경을 감지합니다.
    lodgmentDetail.address, // 이 부분을 추가해 변경을 감지합니다.
    resetRestaurantDetail,
    resetTourDetail,
    resetLodgmentDetail,
  ]);

  // useEffect(() => {
  //   if (selectList === 'restaurant') {
  //     setKeyword(restaurantDetail.address);
  //     resetTourDetail();
  //     resetLodgmentDetail();
  //   }
  // }, []);
  // useEffect(() => {
  //   if (selectList === 'tour') {
  //     setKeyword(tourDetail.address);
  //     resetRestaurantDetail();
  //     resetLodgmentDetail();
  //   }
  // }, []);
  // useEffect(() => {
  //   if (selectList === 'lodgment') {
  //     setKeyword(lodgmentDetail.address);
  //     resetRestaurantDetail();
  //     resetTourDetail();
  //   }
  // }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(`${keyword}`, (data, status, _pagination) => {
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
  }, [map, keyword]);
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
          onClick={handleOpen}
          image={{
            src: `${
              (selectList === 'restaurant' && `/gosung/${imageArray[restaurantDetail.category - 1]}.png`) ||
              (selectList === 'lodgment' && `/gosung/${lodgmentDetail.category}.png`) ||
              (selectList === 'tour' && `/gosung/${tourDetail.category}.png`)
            }`, // 마커이미지의 주소입니다
            size: {
              width: 40,
              height: 40,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 20,
                y: 20,
              },
            },
          }}
        >
          {isOpen && selectList === 'lodgment' && <StyledInfoWindow> {lodgmentDetail.address}</StyledInfoWindow>}
        </MapMarker>
      ))}
      {selectList === 'restaurant' && isOpen && (
        <RestaurantModal handleOpen={handleOpen} restaurantDetail={restaurantDetail}></RestaurantModal>
      )}
      {selectList === 'tour' && isOpen && <TourModal handleOpen={handleOpen} tourDetail={tourDetail}></TourModal>}
      {/* {selectList === 'lodgment' && isOpen && (
        <LodgmentModal handleOpen={handleOpen} lodgmentDetail={lodgmentDetail}></LodgmentModal>
      )} */}
    </Map>
  );
};

export default GosungKakaoMapComponent;
