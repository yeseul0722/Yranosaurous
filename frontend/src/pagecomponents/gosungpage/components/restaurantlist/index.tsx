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
import { useCategoryDetailStore } from '../../../../stores/gosung/useCategoryDetailStore';

interface GosungRestaurantListProps {
  restaurantlist: any[];
}

const GosungRestaurantList = ({ restaurantlist }: GosungRestaurantListProps) => {
  const { restaurantDetail, setRestaurantDetail } = useRestaurantDetailStore();
  const { selectedDetail, setSelectedDetail } = useCategoryDetailStore();

  const handleDetailApi = async (id: number) => {
    const response = await RestaurantDetailGet(id);
    setRestaurantDetail(response.data.response);
    setSelectedDetail(id);
  };
  return (
    <StyledRestaurantListContainer>
      {restaurantlist &&
        restaurantlist.map((restaurant) => (
          <StyledRestaurantContainer key={restaurant.id} onClick={() => handleDetailApi(restaurant.id)}>
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
