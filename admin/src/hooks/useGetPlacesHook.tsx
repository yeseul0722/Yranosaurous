import { useEffect, useState } from 'react';
import placesGet from '../apis/place/placesGet';

export const useGetPlacesHook = () => {
  const [places, setPlaces] = useState<any>([]);

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
  }, []);

  return places;
};
