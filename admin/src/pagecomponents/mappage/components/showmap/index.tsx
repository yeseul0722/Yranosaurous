import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import Categories from '../categories';
import Sidebar from '../sidebar';
import { useGetPlacesHook } from '../../../../hooks/useGetPlacesHook';

const ShowMap = () => {
  const places = useGetPlacesHook();

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
        <Map center={{ lat: 35.056820163386156, lng: 128.39756122959787 }} style={{ width: '100%', height: '100%' }}>
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
                  setSidebarProps({ use: 'update', place });
                }}
              />
            ))}
        </Map>
        <Sidebar {...sidebarProps}></Sidebar>
      </div>
    </div>
  );
};

export default ShowMap;
