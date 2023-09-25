import { useState } from 'react';
import restaurantListGet from '../../apis/restaurant/restaurantListGet';
import useGosungListStore from '../../stores/mobilegosung/useGosungListStore';

export const useRestaurantListHook = () => {
  // const [restaurantList, setRestaurantList] = useState([]);
  const restaurantList = useGosungListStore((state: any) => state.restaurantList);
  const setRestaurantList = useGosungListStore((state: any) => state.setRestaurantList);
  const getrestaurantList = async (category: any) => {
    const res = await restaurantListGet(category);
    setRestaurantList(res.data.response);
  };
  return { getrestaurantList };
};
