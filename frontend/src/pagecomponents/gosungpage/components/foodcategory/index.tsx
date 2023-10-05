import React, { useState } from 'react';
import {
  StyledFoodCategoryBox,
  StyledFoodCategoryContainer,
  StyledFoodCategoryList,
  StyledFoodCategorySection,
} from './FoodCategory.styled';
import RestaurantListGet from '../../../../apis/gosung/restaurantListGet';
import GosungRestaurantList from '../restaurantlist';
import { useRestaurantStore } from '../../../../stores/gosung/restaurants/useRestaurantApiStore';
import { useCategoryStore } from '../../../../stores/gosung/useCategoryStore';
import { useSideBarStore } from '../../../../stores/gosung/useSideBarStore';

const GosungCategory = () => {
  const { restaurantList, setRestaurantList } = useRestaurantStore();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  const HandleApi = async (category: number) => {
    const response = await RestaurantListGet(category);

    setRestaurantList(response.data.response);
    setSelectedCategory(category);
  };

  return (
    <StyledFoodCategorySection>
      <StyledFoodCategoryContainer>
        <StyledFoodCategoryBox>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(1);
              setSelectedMenu('밥집');
            }}
            isSelected={selectedMenu === '밥집'}
          >
            밥집
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(2);
              setSelectedMenu('카페');
            }}
            isSelected={selectedMenu === '카페'}
          >
            카페
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(3);
              setSelectedMenu('술집');
            }}
            isSelected={selectedMenu === '술집'}
          >
            술집
          </StyledFoodCategoryList>

          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(4);
              setSelectedMenu('고깃집');
            }}
            isSelected={selectedMenu === '고깃집'}
          >
            고깃집
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(5);
              setSelectedMenu('횟집');
            }}
            isSelected={selectedMenu === '횟집'}
          >
            횟집
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(6);
              setSelectedMenu('한식');
            }}
            isSelected={selectedMenu === '한식'}
          >
            한식
          </StyledFoodCategoryList>

          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(7);
              setSelectedMenu('중식');
            }}
            isSelected={selectedMenu === '중식'}
          >
            중식
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(8);
              setSelectedMenu('일식');
            }}
            isSelected={selectedMenu === '일식'}
          >
            일식
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(9);
              setSelectedMenu('양식');
            }}
            isSelected={selectedMenu === '양식'}
          >
            양식
          </StyledFoodCategoryList>

          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(10);
              setSelectedMenu('이탈리안');
            }}
            isSelected={selectedMenu === '이탈리안'}
          >
            이탈리안
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(11);
              setSelectedMenu('패스트푸드');
            }}
            isSelected={selectedMenu === '패스트푸드'}
          >
            패스트푸드
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(12);
              setSelectedMenu('분식');
            }}
            isSelected={selectedMenu === '분식'}
          >
            분식
          </StyledFoodCategoryList>

          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(13);
              setSelectedMenu('국물요리');
            }}
            isSelected={selectedMenu === '국물요리'}
          >
            국물요리
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(14);
              setSelectedMenu('면요리');
            }}
            isSelected={selectedMenu === '면요리'}
          >
            면요리
          </StyledFoodCategoryList>
          <StyledFoodCategoryList
            onClick={() => {
              HandleApi(15);
              setSelectedMenu('해산물');
            }}
            isSelected={selectedMenu === '해산물'}
          >
            해산물
          </StyledFoodCategoryList>
        </StyledFoodCategoryBox>
      </StyledFoodCategoryContainer>
      <GosungRestaurantList restaurantlist={restaurantList} selectedCategoryId={selectedCategory} />
    </StyledFoodCategorySection>
  );
};

export default GosungCategory;
