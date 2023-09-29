import { useCategoryStore } from '../../stores/useCategoryStore';
import EnrollMap from './components/placemap';
import ShowMap from './components/showmap';
import CourseMap from './components/coursemap';

const MapPage = () => {
  const { selectcat } = useCategoryStore();

  return (
    <div>
      <div>{selectcat === '1' && <EnrollMap />}</div>
      <div>{selectcat === '2' && <ShowMap />}</div>
      <div>{selectcat === '3' && <CourseMap />}</div>
    </div>
  );
};

export default MapPage;
