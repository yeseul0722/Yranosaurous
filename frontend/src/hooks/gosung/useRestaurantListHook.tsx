import { async } from 'q';
import { useState } from 'react';
import restaurantListGet from '../../apis/restaurant/restaurantListGet';

export const useRestaurantListHook = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const getrestaurantList = async (tourId: any) => {
    const res = await restaurantListGet(tourId);
    setRestaurantList(res.data.response);
  };
  return { restaurantList, getrestaurantList };
};
