import React from 'react';
import { useRestaurantDetailStore } from '../../../../stores/gosung/restaurants/useRestaurantDetailApiStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Rating from '@mui/material/Rating';
import {
  StyledRating,
  StyledRestaurantAd,
  StyledRestaurantDetailContainer,
  StyledRestaurantDetailImg,
  StyledRestaurantImgWrap,
  StyledRestaurantInfo,
  StyledRestaurantName,
  StyledRestauranthashtags,
  Styledhashtag,
  StyledRestaurantAdContainer,
} from './RestaurantDetail.styled';
import GosungRestaurantMenu from '../restaurantmenu';

const GosungRestaurantDetail = () => {
  const { restaurantDetail } = useRestaurantDetailStore();

  return (
    <StyledRestaurantDetailContainer>
      <StyledRestaurantImgWrap>
        <StyledRestaurantDetailImg src={restaurantDetail.imgAddress} />
      </StyledRestaurantImgWrap>
      <StyledRestaurantName>{restaurantDetail.storeName}</StyledRestaurantName>
      <StyledRestauranthashtags>
        {restaurantDetail.hashTagList &&
          restaurantDetail.hashTagList.map((tag: any) => <Styledhashtag key={tag.id}>#{tag.name}</Styledhashtag>)}
      </StyledRestauranthashtags>
      <StyledRestaurantInfo>
        <StyledRestaurantAdContainer>
          <FontAwesomeIcon icon={faLocationDot} />
          <StyledRestaurantAd>{restaurantDetail.address}</StyledRestaurantAd>
        </StyledRestaurantAdContainer>
        <StyledRating>
          <Rating name="read-only" value={restaurantDetail.rating} readOnly /> {restaurantDetail.rating}
        </StyledRating>
      </StyledRestaurantInfo>
      {/* <GosungRestaurantMenu /> */}
    </StyledRestaurantDetailContainer>
  );
};

export default GosungRestaurantDetail;
