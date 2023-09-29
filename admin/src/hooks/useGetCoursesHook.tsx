import { useEffect, useState } from 'react';
import coursesGet from '../apis/course/coursesGet';
import { useRefreshCoursesStore } from '../stores/course/useRefreshCourseStore';

export const useGetCoursesHook = () => {
  const [places, setPlaces] = useState<any>([]);
  const { shouldRefresh } = useRefreshCoursesStore();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await coursesGet();
        setPlaces(data);
      } catch (error) {
        // Handle Error
      }
    };

    fetchCourses();
  }, [shouldRefresh]);
  return places;
};
