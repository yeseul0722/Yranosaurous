import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Sidebar from './components/sidebar';
import Categories from './components/categories';
import { useState } from 'react';
import { PositionType } from './Map.type';

const MapPage = () => {
  const [position, setPosition] = useState<PositionType>();
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
          {position && <MapMarker position={position} />}
        </Map>
        <Sidebar>
          {position && (
            <div>
              <div>위도 : {position.lat}</div>
              <div>경도 : {position.lng}</div>
            </div>
          )}
        </Sidebar>
      </div>
    </div>
  );
};

export default MapPage;
