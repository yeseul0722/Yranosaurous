import React, { useEffect, useState } from 'react';
import { Map, MapMarker, Polygon } from 'react-kakao-maps-sdk';
import { StyledKakaoMapContainer, StyledPostionContainer, StyledOnPositionImg } from './KakaoMap.styled';
import useGuideStore from '../../../../stores/guide/useGuideStore';
import PlaceModal from '../placemodal';
const GosungKakaoMapComponent = () => {
  const place = useGuideStore((state: any) => state.place);
  const selectCategory = useGuideStore((state: any) => state.selectCategory);
  const positions = useGuideStore((state: any) => state.positions);
  const [latitude, setLatitude] = useState(1);
  const [longitude, setLongitude] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [positionImgUrl, setPositionImgUrl] = useState();
  const polygonPosition = positions.map((position: any) => {
    return position.latlng;
  });

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
  const [myPosition, setMyposition] = useState(false);
  const [state, setState] = useState({
    center: {
      lat: 35.06007877,
      lng: 128.39939220501495,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev: any) => ({
            ...prev,
            center: {
              lat: 35.06007877,
              lng: 128.39939220501495,
              // lat: position.coords.latitude, // 위도
              // lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev: any) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev: any) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [selectCategory, place]);

  const handleOpen = (e: any) => {
    setIsOpen(!isOpen);
    console.log(e.imgAddress); // 추천 코스 이미지 주소/ 추천코스는 보여줄게 없어
  };

  useEffect(() => {
    if (selectCategory === 'facility' || selectCategory === 'preview') {
      setLatitude(place.latitude);
      setLongitude(place.longitude);
    }
  }, [place]);

  useEffect(() => {
    console.log(positions);
  }, [positions]);
  return (
    <Map
      id="map"
      center={{
        lat: 35.058175,
        lng: 128.4004,
      }}
      style={{
        width: '100%',
        height: '100vh',
      }}
      level={3}
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
            },
            options: {
              offset: {
                x: 20,
                y: 20,
              },
            }, // 마커이미지의 크기입니다
          }}
          clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          onClick={handleOpen}
        />
      )}
      {selectCategory === 'cource' &&
        positions.map((position: any, index: any) => (
          <MapMarker
            key={position.id}
            position={position.latlng} // 마커를 표시할 위치
            image={{
              src: `/markers/${imageArray[position.markerNumber - 1]}.png`, // 마커이미지의 주소입니다
              size: {
                width: 50,
                height: 50,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 20,
                  y: 20,
                },
              },
            }}
            clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
            onClick={() => handleOpen(position)}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))}
      {selectCategory === 'cource' && (
        <Polygon
          path={polygonPosition}
          strokeWeight={3} // 선의 두께입니다
          strokeColor={'#599198'} // 선의 색깔입니다
          strokeOpacity={0.8} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'longdash'} // 선의 스타일입니다
          fillColor={'#599198'} // 채우기 색깔입니다
          fillOpacity={0.3} // 채우기 불투명도 입니다
        />
      )}
      {(selectCategory === 'facility' || selectCategory === 'preview') && isOpen && (
        <PlaceModal place={place} handleOpen={handleOpen}></PlaceModal>
      )}
      {selectCategory === 'cource' && isOpen && null}
      {/* 내 위치 찍기  */}
      {myPosition && !state.isLoading && (
        <MapMarker
          position={state.center}
          image={{
            src: '/map/pinds.png', // 마커이미지의 주소입니다
            size: {
              width: 50,
              height: 50,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 20,
                y: 20,
              },
            },
          }}
        ></MapMarker>
      )}
      <StyledPostionContainer onClick={() => setMyposition(!myPosition)}>
        <StyledOnPositionImg myposition={myPosition}></StyledOnPositionImg>
      </StyledPostionContainer>
    </Map>
  );
};

export default GosungKakaoMapComponent;
