import React from 'react';
import {
  StyledEVBannerContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledBannerTitle,
  StyledBannerContent,
  StyledBannerLink,
} from './EventVenue.styled';
const EventVenue = () => {
  return (
    <StyledEVBannerContainer>
      <StyledLeftContainer>
        <StyledBannerTitle>행사장 안내</StyledBannerTitle>
        <StyledBannerContent>소요 시간별 추천경로, 행사장 내 먹거리, 편의시설을 확인해보세요!</StyledBannerContent>
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledBannerLink href="/Guide">행사장 안내 ➜</StyledBannerLink>
      </StyledRightContainer>
    </StyledEVBannerContainer>
  );
};

export default EventVenue;
