import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Sidebar from './components/sidebar';
import Categories from './components/categories';
import { useEffect, useState } from 'react';
import { PositionType } from './Map.type';
import placesGet from '../../apis/place/placesGet';

const MapPage = () => {
  const [position, setPosition] = useState<PositionType>();
  const emptyPlace = {
    id: '',
    name: '',
    longitude: '',
    latitude: '',
    markerNumber: '',
    type: '',
    content: '',
  };

  const [places, setPlaces] = useState<any>([]);
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
  ];

  useEffect(() => {
    const fetchList = async () => {
      const data = await placesGet();
      setPlaces(data);
      console.log(data);
    };
    fetchList();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Categories></Categories>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <Map
          center={{ lat: 35.056820163386156, lng: 128.39756122959787 }}
          style={{ width: '100%', height: '100%' }}
          onClick={(_t, mouseEvent) => {
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
                  src: `/images/map/markers/${imageArray[place.markerNumber - 1]}.png`,
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
          {position && (
            <MapMarker
              position={position}
              image={{
                src: '/images/map/curplace.png',
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

export default MapPage;
