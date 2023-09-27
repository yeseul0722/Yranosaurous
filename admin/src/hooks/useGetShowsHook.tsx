import { useEffect, useState } from 'react';
import showsGet from '../apis/show/showsGet';

export const useGetShowsHook = () => {
  const [places, setPlaces] = useState<any>([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await showsGet();
        setPlaces(data);
        console.log(data);
      } catch (error) {
        // console.error('Error fetching places:', error);
      }
    };
    fetchList();
  }, []);

  return places;
};
