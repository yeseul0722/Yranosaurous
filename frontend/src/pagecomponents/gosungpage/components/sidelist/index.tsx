import React from 'react';
import { StyledMenu, StyledSideListContainer } from './Sidelist.styled';
import GosungCategory from '../foodcategory';

const GosungSideList = () => {
  return (
    <StyledSideListContainer>
      <StyledMenu>고성 맛집</StyledMenu>
      <GosungCategory />
    </StyledSideListContainer>
  );
};

export default GosungSideList;
