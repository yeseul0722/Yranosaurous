import { useCategoryStore } from '../../stores/useCategoryStore';
import EnrollMap from './components/placemap';
import ShowMap from './components/showmap';

const MapPage = () => {
  const { selectcat } = useCategoryStore();

  return (
    <div>
      <div>{selectcat === '1' && <EnrollMap />}</div>
      <div>{selectcat === '2' && <ShowMap />}</div>
    </div>
  );
};

export default MapPage;
