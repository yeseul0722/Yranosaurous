import { Map } from 'react-kakao-maps-sdk';

const MapPage = () => {
  return (
    <div>
      <Map
        center={{ lat: 35.056820163386156, lng: 128.39756122959787 }}
        style={{ width: '100vw', height: '100vh' }}
      ></Map>
    </div>
  );
};

export default MapPage;
