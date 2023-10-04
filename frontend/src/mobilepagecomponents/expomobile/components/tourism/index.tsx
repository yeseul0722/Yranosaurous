import React from 'react';
import {
  StyledContainer,
  StyledTourismContainer,
  StyledNavContainer,
  StyledWhere,
  StyeldWhereInfo,
  StyledCardContainer,
  StyledCardBoxContainer,
  StyledCardBox,
  StyledCard,
  StyledCardTextBox,
  StyledCardTextTitle,
  StyledCardTextTitle2,
  StyledCardTextContent,
  StyledGOsungContainer,
  StyledGosung,
  StyledBannerTitleContainer,
  StyledBannerImageContainer,
  StyledBannerImg,
  StyledCardBoxContainer2,
  StyledCardTextContent2,
} from './Tourism.styled';

const Tourism = () => {
  return (
    <StyledContainer>
      <StyledTourismContainer>
        <StyledNavContainer>
          <StyledBannerTitleContainer>
            <StyledBannerImageContainer>
              <StyledBannerImg></StyledBannerImg>
            </StyledBannerImageContainer>
            <StyledWhere>고성에서 어디가지?</StyledWhere>
          </StyledBannerTitleContainer>
          {/* <StyeldWhereInfo>공룡엑스포만 보고 돌아가기 아쉬울 가족들을 위해 관광정보를 골라봤어요!</StyeldWhereInfo> */}
        </StyledNavContainer>
        <StyledCardContainer>
          <StyledCardBoxContainer>
            <StyledCardBox color="#6769B1">
              <StyledCard src="expo_main_pic/restaurant.png" alt="restaurant" />
            </StyledCardBox>
            <StyledCardTextBox>
              <StyledCardTextTitle>고성의 맛집</StyledCardTextTitle>
              <StyledCardTextContent>아이들과 함께 즐기기 좋은 맛집,</StyledCardTextContent>
              <StyledCardTextContent> 유아시설, 주차 등</StyledCardTextContent>
            </StyledCardTextBox>
          </StyledCardBoxContainer>
          <StyledCardBoxContainer2>
            <StyledCardTextBox>
              <StyledCardTextTitle2>관광지</StyledCardTextTitle2>
              <StyledCardTextContent2>공룡엑스포만 보고 돌아가기 아쉬울</StyledCardTextContent2>

              <StyledCardTextContent2> 가족들을 위한 고성관광지 </StyledCardTextContent2>
            </StyledCardTextBox>
            <StyledCardBox color="#DEABAB">
              <StyledCard src="expo_main_pic/tourism.png" alt="tourism" />
            </StyledCardBox>
          </StyledCardBoxContainer2>
          <StyledCardBoxContainer>
            <StyledCardBox color="#E6D2FF">
              <StyledCard src="expo_main_pic/lodgment.png" alt="lodgment" />
            </StyledCardBox>
            <StyledCardTextBox>
              <StyledCardTextTitle>숙박</StyledCardTextTitle>
              <StyledCardTextContent>아이들이랑 함께 자기 좋은 숙박시설!</StyledCardTextContent>
              <StyledCardTextContent>키즈 풀빌라, 청결 모두 챙겨보세요</StyledCardTextContent>
            </StyledCardTextBox>
          </StyledCardBoxContainer>
        </StyledCardContainer>
        <StyledGOsungContainer>
          <StyledGosung href="/gosung">가기 좋은 고성 더 보러가기 ➜</StyledGosung>
        </StyledGOsungContainer>
      </StyledTourismContainer>
    </StyledContainer>
  );
};

export default Tourism;
