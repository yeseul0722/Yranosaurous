import { Map } from 'react-kakao-maps-sdk';
import Sidebar from './components/sidebar';
import Categories from './components/categories';

const MapPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Categories></Categories>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <Map center={{ lat: 35.056820163386156, lng: 128.39756122959787 }} style={{ width: '100%', height: '100%' }} />
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default MapPage;
