import React from 'react';
import { useRestaurantDetailStore } from '../../../../stores/restaurants/useRestaurantDetailApiStore';
import { StyledRestaurantDetailContainer } from './RestaurantDetail.styled';

const GosungRestaurantDetail = () => {
  const { restaurantDetail } = useRestaurantDetailStore();
  console.log(restaurantDetail, 1);

  return <StyledRestaurantDetailContainer></StyledRestaurantDetailContainer>;
};

export default GosungRestaurantDetail;
