import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUtensils, faHouseUser, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { StyledCategoryContainer, StyledCircleContainer, StyledSideBarContainer } from './Sidebar.styled';
import ThemeProvider from 'styled-components';
import theme from '../../styles/DefaultTheme';
import { useLocation } from 'react-router-dom';
const GosungSideBar: React.FC = () => {
  const path = useLocation().pathname;
  useEffect(() => {
    console.log(path);
  });
  return (
    <StyledSideBarContainer>
      <StyledCategoryContainer>
        <StyledCircleContainer>
          <FontAwesomeIcon icon={faBars} />
        </StyledCircleContainer>
      </StyledCategoryContainer>
      {path === '/Gosung' && (
        <div>
          <StyledCategoryContainer>
            <FontAwesomeIcon icon={faUtensils} style={{ marginBottom: '10px' }} />
            <div>맛집</div>
          </StyledCategoryContainer>
          <StyledCategoryContainer>
            <FontAwesomeIcon icon={faHouseUser} style={{ marginBottom: '10px' }} />
            <div>숙소</div>
          </StyledCategoryContainer>
          <StyledCategoryContainer>
            <FontAwesomeIcon icon={faSuitcase} style={{ marginBottom: '10px' }} />
            <div>관광</div>
          </StyledCategoryContainer>
        </div>
      )}
      {path === '/Guide' && (
        <div>
          <div></div>
        </div>
      )}
    </StyledSideBarContainer>
  );
};

export default GosungSideBar;
