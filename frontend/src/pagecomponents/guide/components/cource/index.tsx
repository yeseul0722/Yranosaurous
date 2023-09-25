import React, { useEffect } from 'react';
import { StyledMenuContainer, StyledMenuContentContainer, StyledMenuTitle } from '../../Guide.styled';
import { useCourcesListHook } from '../../../../hooks/guide/useCourcesListHook';

const Cource = () => {
  const { getCourcesList } = useCourcesListHook();
  useEffect(() => {
    getCourcesList();
  }, []);

  return (
    <StyledMenuContainer>
      <StyledMenuTitle>추천 코스</StyledMenuTitle>
      <StyledMenuContentContainer></StyledMenuContentContainer>
    </StyledMenuContainer>
  );
};

export default Cource;
