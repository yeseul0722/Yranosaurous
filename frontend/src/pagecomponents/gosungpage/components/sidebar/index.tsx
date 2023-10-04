import React from 'react';
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

  return (
    <StyledSideBarContainer>
      <StyledCategoryContainer
        onClick={() => {
          Router('/Expo');
        }}
      >
        <StyledHomeIcon />
      </StyledCategoryContainer>
      <StyledCategoryContainer
        onClick={() => {
          setSelectedCategory('맛집');
          setShowSideList(true);
        }}
      >
        <StyledRestaurantIcon />
        <div>맛집</div>
      </StyledCategoryContainer>
      <StyledCategoryContainer
        onClick={() => {
          setSelectedCategory('숙박');
          setShowSideList(true);
        }}
      >
        <StyledAccomodationIcon />
        <div>숙박</div>
      </StyledCategoryContainer>
      <StyledCategoryContainer
        onClick={() => {
          setSelectedCategory('관광');
          setShowSideList(true);
        }}
      >
        <StyledSightseeingIcon />
        <div>관광</div>
      </StyledCategoryContainer>
    </StyledSideBarContainer>
  );
};

export default GosungSideBar;
