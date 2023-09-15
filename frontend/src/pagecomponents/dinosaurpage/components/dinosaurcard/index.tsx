import React, { useState } from 'react';
import { StyledDinosaurCardContainer, StyledDinosaurCardImage, StyledDinosaurCardName } from './Dinosaurcard.styled';

const DinosaurCardComponent = () => {
  return (
    <StyledDinosaurCardContainer>
      <StyledDinosaurCardImage src="/dinosaur/profileImg.jpg" alt="공룡이미지" />
      <StyledDinosaurCardName>티라노사우루스</StyledDinosaurCardName>
    </StyledDinosaurCardContainer>
  );
};

export default DinosaurCardComponent;
