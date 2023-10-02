import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import { PositionType } from '../../Map.type';
import Categories from '../categories';
import Sidebar from '../sidebar';
import { useGetPlacesHook } from '../../../../hooks/useGetPlacesHook';
import { useRefreshCoursesStore } from '../../../../stores/course/useRefreshCourseStore';

const PlaceMap = () => {
  const places = useGetPlacesHook();
  const { setShowMarker, showMarker } = useRefreshCoursesStore();
  const [position, setPosition] = useState<PositionType>();
  const emptyPlace = {
    id: '',
    name: '',
    longitude: '',
    latitude: '',
    markerNumber: '',
    type: '',
    content: '',
    imgAddress: '',
  };

  const [sidebarProps, setSidebarProps] = useState({ use: 'enroll', place: { ...emptyPlace } });

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

  return (
    <div style={{ display: 'flex' }}>
      <Categories></Categories>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <Map
          center={{ lat: 35.057861892100966, lng: 128.39958604747372 }}
          style={{ width: '100%', height: '100%' }}
          onClick={(_t, mouseEvent) => {
            setShowMarker();
            const pos = {
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            };
            setPosition(pos);
            setSidebarProps({
              use: 'enroll',
              place: {
                ...emptyPlace,
                longitude: pos.lng.toString(),
                latitude: pos.lat.toString(),
              },
            });
          }}
        >
          {places.length > 0 &&
            places.map((place: any) => (
              <MapMarker
                key={place.id}
                position={{ lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) }}
                image={{
                  src: `${process.env.REACT_APP_ADMIN_URL}/images/map/markers/${
                    imageArray[place.markerNumber - 1]
                  }.png`,
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
                onClick={() => {
                  setPosition({ lat: 0, lng: 0 });
                  setSidebarProps({ use: 'update', place });
                }}
              />
            ))}
          {showMarker && position && (
            <MapMarker
              position={position}
              image={{
                src: `${process.env.REACT_APP_ADMIN_URL}/images/map/curplace.png`,
                size: {
                  width: 30,
                  height: 40,
                },
                options: {
                  offset: {
                    x: 13,
                    y: 34,
                  },
                },
              }}
            />
          )}
        </Map>
        <Sidebar {...sidebarProps}></Sidebar>
      </div>
    </div>
  );
};

export default PlaceMap;
