import { useEffect, useState } from 'react';
import showsGet from '../apis/show/showsGet';
import { useRefreshCoursesStore } from '../stores/course/useRefreshCourseStore';

export const useGetShowsHook = () => {
  const [places, setPlaces] = useState<any>([]);
  const { shouldRefresh } = useRefreshCoursesStore();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await showsGet();
        setPlaces(data);
        // console.log(data);
      } catch (error) {
        // console.error('Error fetching places:', error);
      }
    };
    fetchList();
  }, [shouldRefresh]);

  return places;
};
