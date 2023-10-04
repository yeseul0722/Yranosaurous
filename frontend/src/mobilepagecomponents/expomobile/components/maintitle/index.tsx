import React from 'react';
import {
  StyledContainer,
  StyledBannerTitleContainer,
  StyledBannerImageContainer,
  StyledBannerImg,
  StyledExpoTitle,
  StyledContentContainer,
  StyledContent,
  StyledContent2,
  StyledContentContainer2,
} from './MainTitle.styled';

const MainTitle = () => {
  return (
    <StyledContainer>
      <StyledBannerTitleContainer>
        <StyledBannerImageContainer>
          <StyledBannerImg src="/mobile/char1.png"></StyledBannerImg>
        </StyledBannerImageContainer>
        <StyledExpoTitle>상상 그 이상의 공룡의 세계</StyledExpoTitle>
        <StyledBannerImageContainer>
          <StyledBannerImg src="/mobile/char3.png"></StyledBannerImg>
        </StyledBannerImageContainer>
      </StyledBannerTitleContainer>
      <StyledContentContainer>
        <StyledContent>2023.09.22(금) ~ 2023.10.29(일)</StyledContent>
        <StyledContentContainer2>
          <StyledContent2> 경남고성공룡세계엑스포</StyledContent2>
          <StyledContent> 로 초대합니다!</StyledContent>
        </StyledContentContainer2>
      </StyledContentContainer>
    </StyledContainer>
  );
};

export default MainTitle;
