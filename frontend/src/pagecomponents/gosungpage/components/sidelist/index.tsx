import React from 'react';
import { StyledMenu, StyledSideListContainer } from './Sidelist.styled';
import FoodCategory from '../foodcategory';
import { useSideBarStore } from '../../../../stores/gosung/useSideBarStore';
import GosungAccomoCategory from '../accomocategory';
import GosungTourismCategory from '../tourismcategory';

const GosungSideList = () => {
  const selectedCategory = useSideBarStore((state) => state.selectedCategory);

  let menuName;
  let CategoryComponent;

  switch (selectedCategory) {
    case '맛집':
      menuName = '고성 맛집';
      CategoryComponent = <FoodCategory />;
      break;
    case '숙박':
      menuName = '고성 숙박';
      CategoryComponent = <GosungAccomoCategory />;
      break;
    case '관광':
      menuName = '고성 관광';
      CategoryComponent = <GosungTourismCategory />;
      break;
    default:
      menuName = null;
  }

  return (
    <StyledSideListContainer>
      <StyledMenu>{menuName}</StyledMenu>
      {CategoryComponent}
    </StyledSideListContainer>
  );
};

export default GosungSideList;
