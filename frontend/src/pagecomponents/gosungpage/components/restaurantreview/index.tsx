import React from 'react';
import { StyledReview, StyledReviewContainer, StyledReviewText } from './RestaurantReview.styled';

interface GosungRestaurantDetailProps {
  restaurantDetail: { reviewResponseList: any[] };
}

const GosungRestaurantReview = ({ restaurantDetail }: GosungRestaurantDetailProps) => {
  return (
    <StyledReviewContainer>
      <StyledReviewText>Review</StyledReviewText>
      {restaurantDetail.reviewResponseList &&
        restaurantDetail.reviewResponseList.map((review: any) => (
          <StyledReview key={review.id}>{review.title}</StyledReview>
        ))}
    </StyledReviewContainer>
  );
};

export default GosungRestaurantReview;
