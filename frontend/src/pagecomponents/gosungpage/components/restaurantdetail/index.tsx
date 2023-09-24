import React from 'react';
import { useRestaurantDetailStore } from '../../../../stores/restaurants/useRestaurantDetailApiStore';

const GosungRestaurantDetail = () => {
  const { restaurantDetail } = useRestaurantDetailStore();
  console.log(restaurantDetail, 1);

  return <div></div>;
};
