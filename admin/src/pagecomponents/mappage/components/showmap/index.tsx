import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import Categories from '../categories';
import Sidebar from '../sidebar';
import { useGetShowsHook } from '../../../../hooks/useGetShowsHook';
import { Festival, Place } from '../../Map.type';

const ShowMap = () => {
  const shows = useGetShowsHook();
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [place, setPlace] = useState<Place | null>(null);
  const resetPlace = () => {
    setPlace(null);
  };

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
      <Categories />
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <Map center={{ lat: 35.057861892100966, lng: 128.39958604747372 }} style={{ width: '100%', height: '100%' }}>
          {shows &&
            shows.length > 0 &&
            shows.map((show: any) => (
              <MapMarker
                key={show.id}
                position={{ lat: parseFloat(show.latitude), lng: parseFloat(show.longitude) }}
                image={{
                  src: `${process.env.REACT_APP_ADMIN_URL}/images/map/markers/${imageArray[show.markerNumber - 1]}.png`,
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
                  setPlace({
                    id: show.id,
                    name: show.name,
                    longitude: show.longitude,
                    latitude: show.latitude,
                    markerNumber: show.markerNumber,
                    imgAddress: show.imgAddress,
                    content: show.content,
                    type: show.type,
                  });
                  setFestivals(show.festivalList || []);
                }}
              />
            ))}
        </Map>
        <Sidebar place={place} festivals={festivals} resetPlace={resetPlace} />
      </div>
    </div>
  );
};

export default ShowMap;
