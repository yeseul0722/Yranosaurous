import { Map } from 'react-kakao-maps-sdk';
import Sidebar from './components/sidebar';

const MapPage = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Map center={{ lat: 35.056820163386156, lng: 128.39756122959787 }} style={{ width: '100%', height: '100%' }} />
      <Sidebar>right sidebar</Sidebar>
    </div>
  );
};

export default MapPage;
