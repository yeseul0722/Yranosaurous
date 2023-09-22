import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Sidebar from './components/sidebar';
import Categories from './components/categories';
import { useEffect, useState } from 'react';
import { PositionType } from './Map.type';
import placesGet from '../../apis/place/placesGet';

const MapPage = () => {
  const [position, setPosition] = useState<PositionType>();
  const [places, setPlaces] = useState<any>([]);

  useEffect(() => {
    const fetchList = async () => {
      const data = await placesGet();
      setPlaces(data);
      // console.log(data);
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
          onClick={(_t, mouseEvent) =>
            setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
          }
        >
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
        <Sidebar position={position}></Sidebar>
      </div>
    </div>
  );
};

export default MapPage;
