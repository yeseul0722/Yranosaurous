import React from 'react';
import {
  StyledRestaurantContainer,
  StyledRestaurantImg,
  StyledRestaurantListContainer,
  StyledRestaurantRating,
  StyledRestaurantStoreName,
} from './Styled.restaurantlist';

interface GosungRestaurantListProps {
  restaurantlist: any[];
}

const GosungRestaurantList = ({ restaurantlist }: GosungRestaurantListProps) => {
  return (
    <StyledRestaurantListContainer>
      {restaurantlist.map((restaurant) => (
        <StyledRestaurantContainer key={restaurant.id}>
          <StyledRestaurantImg src={restaurant.imgAddress}></StyledRestaurantImg>
          <StyledRestaurantStoreName>{restaurant.storeName}</StyledRestaurantStoreName>
          <StyledRestaurantRating>{restaurant.rating}</StyledRestaurantRating>
        </StyledRestaurantContainer>
      ))}
    </StyledRestaurantListContainer>
  );
};

export default GosungRestaurantList;
