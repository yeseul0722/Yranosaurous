import { useState } from 'react';
import restaurantDetailGet from '../../apis/restaurant/restaurantDetailGet';
import useGosungListStore from '../../stores/mobilegosung/useGosungListStore';

export const useRestaurantDetailHook = () => {
  const setRestaurantDetail = useGosungListStore((state: any) => state.setRestaurantDetail);
  const getRestaurantDetail = async (id: any) => {
    const res = await restaurantDetailGet(id);
    setRestaurantDetail(res.data.response);
  };
  return { getRestaurantDetail };
};
