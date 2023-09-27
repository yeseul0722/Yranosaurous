import React from 'react';
import {
  StyledRestaurantContainer,
  StyledRestaurantImg,
  StyledRestaurantInfo,
  StyledRestaurantListContainer,
  StyledRestaurantRating,
  StyledRestaurantStoreName,
} from './RestaurantList.styled';
import { useRestaurantDetailStore } from '../../../../stores/gosung/restaurants/useRestaurantDetailApiStore';
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
      {restaurantlist &&
        restaurantlist.map((restaurant) => (
          <StyledRestaurantContainer key={restaurant.id} onClick={() => HandleDetailApi(restaurant.id)}>
            <StyledRestaurantImg src={restaurant.imgAddress}></StyledRestaurantImg>
            <StyledRestaurantInfo>
              <StyledRestaurantStoreName>{restaurant.storeName}</StyledRestaurantStoreName>
              <StyledRestaurantRating>{restaurant.rating}</StyledRestaurantRating>
            </StyledRestaurantInfo>
          </StyledRestaurantContainer>
        ))}
    </StyledRestaurantListContainer>
  );
};

export default GosungRestaurantList;
