import React from 'react';
import { StyledLink, StyledReview, StyledReviewContainer, StyledReviewText } from './RestaurantReview.styled';

interface GosungRestaurantDetailProps {
  restaurantDetail: { reviewResponseList: any[] };
}

const GosungRestaurantReview = ({ restaurantDetail }: GosungRestaurantDetailProps) => {
  return (
    <StyledReviewContainer>
      <StyledReviewText>Review</StyledReviewText>
      {restaurantDetail.reviewResponseList &&
        restaurantDetail.reviewResponseList.map((review: any) => (
          <StyledLink href={review.reviewAddress} target="_blank" rel="noreferrer" key={review.id}>
            <StyledReview>{review.title}</StyledReview>
          </StyledLink>
        ))}
    </StyledReviewContainer>
  );
};

export default GosungRestaurantReview;
