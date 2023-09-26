import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUtensils, faHouseUser, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import {
  StyledAccomodationIcon,
  StyledCategoryContainer,
  StyledCircleContainer,
  StyledRestaurantIcon,
  StyledSideBarContainer,
  StyledSightseeingIcon,
} from './Sidebar.styled';
import { useSideBarStore } from '../../../../stores/gosung/useSideBarStore';

const GosungSideBar = () => {
  const setSelectedCategory = useSideBarStore((state) => state.setSelectedCategory);

  return (
    <StyledSideBarContainer>
      <StyledCategoryContainer>
        <StyledCircleContainer>
          <FontAwesomeIcon icon={faBars} />
        </StyledCircleContainer>
      </StyledCategoryContainer>
      <StyledCategoryContainer onClick={() => setSelectedCategory('맛집')}>
        <StyledRestaurantIcon />
        <div>맛집</div>
      </StyledCategoryContainer>
      <StyledCategoryContainer onClick={() => setSelectedCategory('숙소')}>
        <StyledAccomodationIcon />
        <div>숙소</div>
      </StyledCategoryContainer>
      <StyledCategoryContainer onClick={() => setSelectedCategory('관광')}>
        <StyledSightseeingIcon />
        <div>관광</div>
      </StyledCategoryContainer>
    </StyledSideBarContainer>
  );
};

export default GosungSideBar;
