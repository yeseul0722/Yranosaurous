import React from 'react';
import {
  StyledIcon,
  StyledRestaurantContainer,
  StyledRestaurantImg,
  StyledRestaurantInfo,
  StyledRestaurantListContainer,
  StyledRestaurantRating,
  StyledRestaurantStoreName,
  StyledInfo,
  StyledRating,
} from './RestaurantList.styled';
import { useRestaurantDetailStore } from '../../../../stores/gosung/restaurants/useRestaurantDetailApiStore';
import RestaurantDetailGet from '../../../../apis/gosung/restaurantDetailGet';
import { useCategoryDetailStore } from '../../../../stores/gosung/useCategoryDetailStore';
import Rating from '@mui/material/Rating';

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
              <StyledInfo>
                <StyledIcon />
                <StyledRestaurantStoreName>{restaurant.storeName}</StyledRestaurantStoreName>
              </StyledInfo>
              <StyledRating>
                <Rating name="read-only" value={restaurant.rating} readOnly />
                {restaurant.rating}
              </StyledRating>
            </StyledRestaurantInfo>
          </StyledRestaurantContainer>
        ))}
    </StyledRestaurantListContainer>
  );
};

export default GosungRestaurantList;
