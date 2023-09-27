import React from 'react';
import { StyledAccomoCategoryList, StyledAccomoCategoryWrap } from './AccomoCategory.styled';

const GosungAccomoCategory = () => {
  return (
    <StyledAccomoCategoryWrap>
      <StyledAccomoCategoryList>모텔</StyledAccomoCategoryList>
      <StyledAccomoCategoryList>펜션</StyledAccomoCategoryList>
      <StyledAccomoCategoryList>게스트하우스</StyledAccomoCategoryList>
    </StyledAccomoCategoryWrap>
  );
};

export default GosungAccomoCategory;
