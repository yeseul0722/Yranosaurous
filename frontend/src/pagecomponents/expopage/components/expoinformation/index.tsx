import React from 'react';
import {
  StyledExpoInfoContainer,
  StyledExpoInfoPage,
  StyledExpoInfoPoster,
  StyledExpoInfoTitleContainer,
  StyledExpoInfoTitle,
  StyledExpoInfoContent,
  StyledExpoInfoContentContainer,
  StyledExpoInfoTitleContent,
  StyledExpoInfoContentTitle,
  StyledExpoInfoContentContent,
  StyledImageContainer,
  StyledImage,
} from './ExpoInformation.Styled';

const ExpoInformation = () => {
  return (
    <StyledExpoInfoPage>
      <StyledExpoInfoContainer>
        <StyledExpoInfoTitleContainer>
          <StyledExpoInfoTitle>2023경남고성공룡세계엑스포</StyledExpoInfoTitle>
          <StyledExpoInfoContent> Gyeongnam Goseong Dinosaur World Expo 2023</StyledExpoInfoContent>
        </StyledExpoInfoTitleContainer>
        <StyledExpoInfoContentContainer>
          <StyledExpoInfoTitleContent>
            <StyledExpoInfoContentTitle>| 일정</StyledExpoInfoContentTitle>
            <StyledExpoInfoContentContent>2023.09.22(금) ~ 2023.10.29(일) [38일간]</StyledExpoInfoContentContent>
          </StyledExpoInfoTitleContent>
          <StyledExpoInfoTitleContent>
            <StyledExpoInfoContentTitle>| 개장 시간</StyledExpoInfoContentTitle>
            <StyledExpoInfoContentContent>월~목 (09:00 ~ 18:00)</StyledExpoInfoContentContent>
            <StyledExpoInfoContentContent>금~토 (09:00 ~ 22:00)</StyledExpoInfoContentContent>
          </StyledExpoInfoTitleContent>
          <StyledExpoInfoTitleContent>
            <StyledExpoInfoContentTitle>| 장소</StyledExpoInfoContentTitle>
            <StyledExpoInfoContentContent>경남 고성군 회화면 당항포관광지</StyledExpoInfoContentContent>
          </StyledExpoInfoTitleContent>
        </StyledExpoInfoContentContainer>
      </StyledExpoInfoContainer>
      <StyledExpoInfoPoster>
        <StyledImageContainer>
          <StyledImage src="expo_main_pic/ExpoInformation.png" alt="poster" />
        </StyledImageContainer>
      </StyledExpoInfoPoster>
    </StyledExpoInfoPage>
  );
};

export default ExpoInformation;
