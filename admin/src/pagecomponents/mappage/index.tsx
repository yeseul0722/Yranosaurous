import { useCategoryStore } from '../../stores/useCategoryStore';
import EnrollMap from './components/placemap';

const MapPage = () => {
  const { selectcat } = useCategoryStore();

  return <div>{selectcat === '1' && <EnrollMap />}</div>;
};

export default MapPage;
