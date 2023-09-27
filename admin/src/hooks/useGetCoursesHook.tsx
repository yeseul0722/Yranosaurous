import { useEffect, useState } from 'react';
import coursesGet from '../apis/course/coursesGet';

export const useGetCoursesHook = () => {
  const [places, setPlaces] = useState<any>([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await coursesGet();
        setPlaces(data);
      } catch (error) {
        // console.error('Error fetching places:', error);
      }
    };
    fetchList();
  }, []);

  return places;
};
