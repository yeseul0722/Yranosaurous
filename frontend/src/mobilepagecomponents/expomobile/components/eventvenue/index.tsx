import React from 'react';
import {
  StyledContainer,
  StyledEVBannerContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledBannerTitleContainer,
  StyledBannerImageContainer,
  StyledBannerImg,
  StyledBannerTitle,
  StyledBannerContent,
  StyledBannerLink,
} from './EventVenue.styled';
const EventVenue = () => {
  return (
    <StyledContainer>
      <StyledEVBannerContainer>
        <StyledLeftContainer>
          <StyledBannerTitleContainer>
            <StyledBannerImageContainer>
              <StyledBannerImg></StyledBannerImg>
            </StyledBannerImageContainer>
            <StyledBannerTitle>행사장 안내</StyledBannerTitle>
          </StyledBannerTitleContainer>
          <StyledBannerContent>소요 시간별 추천경로, 행사장 내 먹거리, 편의시설을 확인해보세요!</StyledBannerContent>
        </StyledLeftContainer>
        {/* <StyledRightContainer>
        <StyledBannerLink>행사장 안내 ➜</StyledBannerLink>
      </StyledRightContainer> */}
      </StyledEVBannerContainer>
    </StyledContainer>
  );
};

export default EventVenue;
