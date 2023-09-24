import React from 'react';
import {
  StyledRestaurantContainer,
  StyledRestaurantImg,
  StyledRestaurantListContainer,
  StyledRestaurantRating,
  StyledRestaurantStoreName,
} from './RestaurantList.styled';
import { useRestaurantDetailStore } from '../../../../stores/restaurants/useRestaurantDetailApiStore';
import RestaurantDetailGet from '../../../../apis/gosung/restaurantDetailGet';

interface GosungRestaurantListProps {
  restaurantlist: any[];
}

const GosungRestaurantList = ({ restaurantlist }: GosungRestaurantListProps) => {
  const { restaurantDetail, setRestaurantDetail } = useRestaurantDetailStore();

  const HandleDetailApi = async (id: number) => {
    const response = await RestaurantDetailGet(id);
    console.log(response.data.response);
    setRestaurantDetail(response.data.response);
  };
  return (
    <StyledRestaurantListContainer>
      {restaurantlist.map((restaurant) => (
        <StyledRestaurantContainer key={restaurant.id} onClick={() => HandleDetailApi(restaurant.id)}>
          <StyledRestaurantImg src={restaurant.imgAddress}></StyledRestaurantImg>
          <StyledRestaurantStoreName>{restaurant.storeName}</StyledRestaurantStoreName>
          <StyledRestaurantRating>{restaurant.rating}</StyledRestaurantRating>
        </StyledRestaurantContainer>
      ))}
    </StyledRestaurantListContainer>
  );
};

export default GosungRestaurantList;
