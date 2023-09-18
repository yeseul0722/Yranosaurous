import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUtensils, faHouseUser, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { StyledCategoryContainer, StyledCircleContainer, StyledSideBarContainer } from './Sidebar.styled';

const GosungSideBar: React.FC = () => {
  return (
    <StyledSideBarContainer>
      <StyledCategoryContainer>
        <StyledCircleContainer>
          <FontAwesomeIcon icon={faBars} />
        </StyledCircleContainer>
      </StyledCategoryContainer>
      <StyledCategoryContainer>
        <FontAwesomeIcon icon={faUtensils} style={{ marginBottom: '10px' }} />
        <div>맛집</div>
      </StyledCategoryContainer>
      <StyledCategoryContainer>
        <FontAwesomeIcon icon={faHouseUser} style={{ marginBottom: '10px' }} />
        <div>여행</div>
      </StyledCategoryContainer>
      <StyledCategoryContainer>
        <FontAwesomeIcon icon={faSuitcase} style={{ marginBottom: '10px' }} />
        <div>관광</div>
      </StyledCategoryContainer>
    </StyledSideBarContainer>
  );
};

export default GosungSideBar;
