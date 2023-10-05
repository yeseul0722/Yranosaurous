import React, { useState } from 'react';
import { Router, useNavigate } from 'react-router-dom';
import {
  StyledAccomodationIcon,
  StyledCategoryContainer,
  StyledCircleContainer,
  StyledHomeIcon,
  StyledRestaurantIcon,
  StyledSideBarContainer,
  StyledSightseeingIcon,
} from './Sidebar.styled';
import { useSideBarStore } from '../../../../stores/gosung/useSideBarStore';

const GosungSideBar = () => {
  const Router = useNavigate();
  const setSelectedCategory = useSideBarStore((state) => state.setSelectedCategory);
  const setShowSideList = useSideBarStore((state) => state.setShowSideList);
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  return (
    <StyledSideBarContainer>
      <StyledCategoryContainer
        onClick={() => {
          Router('/Expo');
        }}
        isSelected={selectedMenu === 'home'}
      >
        <StyledHomeIcon />
      </StyledCategoryContainer>
      <StyledCategoryContainer
        onClick={() => {
          setSelectedCategory('맛집');
          setShowSideList(true);
          setSelectedMenu('맛집');
        }}
        isSelected={selectedMenu === '맛집'}
      >
        <StyledRestaurantIcon />
        <div>맛집</div>
      </StyledCategoryContainer>
      <StyledCategoryContainer
        onClick={() => {
          setSelectedCategory('숙박');
          setShowSideList(true);
          setSelectedMenu('숙박');
        }}
        isSelected={selectedMenu === '숙박'}
      >
        <StyledAccomodationIcon />
        <div>숙박</div>
      </StyledCategoryContainer>
      <StyledCategoryContainer
        onClick={() => {
          setSelectedCategory('관광');
          setShowSideList(true);
          setSelectedMenu('관광');
        }}
        isSelected={selectedMenu === '관광'}
      >
        <StyledSightseeingIcon />
        <div>관광</div>
      </StyledCategoryContainer>
    </StyledSideBarContainer>
  );
};

export default GosungSideBar;
