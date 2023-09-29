import React, { useState } from 'react';
import {
  StyledFoodCategoryBox,
  StyledFoodCategoryContainer,
  StyledFoodCategoryList,
  StyledFoodCategorySection,
  StyledFoodCategoryWrap,
} from './FoodCategory.styled';
import RestaurantListGet from '../../../../apis/gosung/restaurantListGet';
import GosungRestaurantList from '../restaurantlist';
import { useRestaurantStore } from '../../../../stores/gosung/restaurants/useRestaurantApiStore';
import { useCategoryStore } from '../../../../stores/gosung/useCategoryStore';

const GosungCategory = () => {
  const { restaurantList, setRestaurantList } = useRestaurantStore();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();

  const HandleApi = async (category: number) => {
    const response = await RestaurantListGet(category);

    setRestaurantList(response.data.response);
    setSelectedCategory(category);
  };

  return (
    <StyledFoodCategorySection>
      <StyledFoodCategoryContainer>
        <StyledFoodCategoryBox>
          <StyledFoodCategoryWrap>
            <StyledFoodCategoryList onClick={() => HandleApi(1)}>밥집</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(2)}>카페</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(3)}>술집</StyledFoodCategoryList>
          </StyledFoodCategoryWrap>
          <StyledFoodCategoryWrap>
            <StyledFoodCategoryList onClick={() => HandleApi(4)}>고깃집</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(5)}>횟집</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(6)}>한식</StyledFoodCategoryList>
          </StyledFoodCategoryWrap>
          <StyledFoodCategoryWrap>
            <StyledFoodCategoryList onClick={() => HandleApi(7)}>중식</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(8)}>일식</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(9)}>양식</StyledFoodCategoryList>
          </StyledFoodCategoryWrap>
          <StyledFoodCategoryWrap>
            <StyledFoodCategoryList onClick={() => HandleApi(10)}>이탈리안</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(11)}>패스트푸드</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(12)}>분식</StyledFoodCategoryList>
          </StyledFoodCategoryWrap>
          <StyledFoodCategoryWrap>
            <StyledFoodCategoryList onClick={() => HandleApi(13)}>국물요리</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(14)}>면요리</StyledFoodCategoryList>
            <StyledFoodCategoryList onClick={() => HandleApi(15)}>해산물</StyledFoodCategoryList>
          </StyledFoodCategoryWrap>
        </StyledFoodCategoryBox>
      </StyledFoodCategoryContainer>
      <GosungRestaurantList restaurantlist={restaurantList} />
    </StyledFoodCategorySection>
  );
};

export default GosungCategory;
