import React from 'react';
import { useRestaurantDetailStore } from '../../../../stores/gosung/restaurants/useRestaurantDetailApiStore';
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
  StyledLocationIcon,
} from './RestaurantDetail.styled';
import GosungRestaurantMenu from '../restaurantmenu';
import HashtagListGet from '../../../../apis/gosung/hashtagListGet';
import GosungAccomoCategory from '../accomocategory';
import GosungRestaurantReview from '../restaurantreview';
import Rating from 'react-rating';

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
          <StyledLocationIcon />
          <StyledRestaurantAd>{restaurantDetail.address}</StyledRestaurantAd>
        </StyledRestaurantAdContainer>
        <StyledRating>
          <Rating
            readonly={true}
            initialRating={restaurantDetail.rating}
            fullSymbol={<img src="/rating/stards.png" alt="Full Star" style={{ width: '30px', height: '30px' }} />}
            emptySymbol={<img src="/rating/stards2.png" alt="Empty Star" style={{ width: '30px', height: '30px' }} />}
          />
          {restaurantDetail.rating}
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
