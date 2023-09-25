import React from 'react';
import { useRestaurantDetailStore } from '../../../../stores/restaurants/useRestaurantDetailApiStore';
import {
  StyledRestaurantDetailContainer,
  StyledRestaurantDetailImg,
  StyledRestaurantImgWrap,
  StyledRestaurantName,
  StyledRestauranthashtags,
  Styledhashtag,
} from './RestaurantDetail.styled';

const GosungRestaurantDetail = () => {
  const { restaurantDetail } = useRestaurantDetailStore();

  return (
    <StyledRestaurantDetailContainer>
      <StyledRestaurantImgWrap>
        <StyledRestaurantDetailImg src={restaurantDetail.imgAddress} />
      </StyledRestaurantImgWrap>
      <StyledRestaurantName>{restaurantDetail.storeName}</StyledRestaurantName>
      <StyledRestauranthashtags>
        {restaurantDetail.hashTagList.map((tag: any) => (
          <Styledhashtag key={tag.id}>#{tag.name}</Styledhashtag>
        ))}
      </StyledRestauranthashtags>
    </StyledRestaurantDetailContainer>
  );
};

export default GosungRestaurantDetail;
