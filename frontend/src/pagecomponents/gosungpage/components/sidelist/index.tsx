import React from 'react';
import { StyledSideListContainer } from './Sidelist.styled';
import GosungCategory from '../foodcategory';

const GosungSideList: React.FC = () => {
  return (
    <StyledSideListContainer>
      <GosungCategory />
    </StyledSideListContainer>
  );
};

export default GosungSideList;
