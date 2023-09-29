import { useEffect, useState } from 'react';
import placesGet from '../apis/place/placesGet';
import { useRefreshCoursesStore } from '../stores/course/useRefreshCourseStore';

export const useGetPlacesHook = () => {
  const [places, setPlaces] = useState<any>([]);
  const { shouldRefresh } = useRefreshCoursesStore();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await placesGet();
        setPlaces(data);
      } catch (error) {
        // console.error('Error fetching places:', error);
      }
    };
    fetchList();
  }, [shouldRefresh]);

  return places;
};
