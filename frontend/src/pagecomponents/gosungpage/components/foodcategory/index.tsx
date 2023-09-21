import React from 'react';
import { StyledFoodCategoryContainer, StyledFoodCategoryList, StyledFoodCategoryWrap } from './FoodCategory.styled';

const GosungCategory: React.FC = () => {
  return (
    <StyledFoodCategoryContainer>
      <StyledFoodCategoryWrap>
        <StyledFoodCategoryList>밥집</StyledFoodCategoryList>
        <StyledFoodCategoryList>카페</StyledFoodCategoryList>
        <StyledFoodCategoryList>술집</StyledFoodCategoryList>
      </StyledFoodCategoryWrap>
      <StyledFoodCategoryWrap>
        <StyledFoodCategoryList>고깃집</StyledFoodCategoryList>
        <StyledFoodCategoryList>횟집</StyledFoodCategoryList>
        <StyledFoodCategoryList>한식</StyledFoodCategoryList>
      </StyledFoodCategoryWrap>
      <StyledFoodCategoryWrap>
        <StyledFoodCategoryList>중식</StyledFoodCategoryList>
        <StyledFoodCategoryList>일식</StyledFoodCategoryList>
        <StyledFoodCategoryList>양식</StyledFoodCategoryList>
      </StyledFoodCategoryWrap>
      <StyledFoodCategoryWrap>
        <StyledFoodCategoryList>이탈리안</StyledFoodCategoryList>
        <StyledFoodCategoryList>패스트푸드</StyledFoodCategoryList>
        <StyledFoodCategoryList>분식</StyledFoodCategoryList>
      </StyledFoodCategoryWrap>
      <StyledFoodCategoryWrap>
        <StyledFoodCategoryList>국물요리</StyledFoodCategoryList>
        <StyledFoodCategoryList>면요리</StyledFoodCategoryList>
        <StyledFoodCategoryList>해산물</StyledFoodCategoryList>
      </StyledFoodCategoryWrap>
    </StyledFoodCategoryContainer>
  );
};

export default GosungCategory;
