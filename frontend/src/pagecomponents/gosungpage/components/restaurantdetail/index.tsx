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
  StyledMenuContainer,
  StyledReviewContainer,
} from './RestaurantDetail.styled';
import GosungRestaurantMenu from '../restaurantmenu';
import HashtagListGet from '../../../../apis/gosung/hashtagListGet';
import GosungAccomoCategory from '../accomocategory';
import GosungRestaurantReview from '../restaurantreview';

const GosungRestaurantDetail = () => {
  const { restaurantDetail } = useRestaurantDetailStore();
  console.log(restaurantDetail);

  const handleHashtagApi = async (tag: string) => {
    const response = await HashtagListGet(tag);
    console.log(response);
  };

  return (
    <StyledRestaurantDetailContainer>
      <StyledRestaurantImgWrap>
        <StyledRestaurantDetailImg src={restaurantDetail.imgAddress} />
      </StyledRestaurantImgWrap>
      <StyledRestaurantName>{restaurantDetail.storeName}</StyledRestaurantName>
      <StyledRestauranthashtags>
        {restaurantDetail.hashTagList &&
          restaurantDetail.hashTagList.map((tag: any) => (
            <Styledhashtag key={tag.id} onClick={() => handleHashtagApi(tag.name)}>
              #{tag.name}
            </Styledhashtag>
          ))}
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
      <StyledMenuContainer>
        <GosungRestaurantMenu restaurantDetail={restaurantDetail} />
      </StyledMenuContainer>
      <StyledReviewContainer>
        <GosungRestaurantReview restaurantDetail={restaurantDetail} />
      </StyledReviewContainer>
    </StyledRestaurantDetailContainer>
  );
};

export default GosungRestaurantDetail;
