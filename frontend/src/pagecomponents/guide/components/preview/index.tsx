import React, { useEffect } from 'react';
import { StyledMenuContainer, StyledMenuTitle } from '../../Guide.styled';
import { useFestivalListHook } from '../../../../hooks/guide/useFestivalListHook';

const Preview = () => {
  const { getFestivalList } = useFestivalListHook();
  useEffect(() => {
    getFestivalList();
  }, []);
  return (
    <StyledMenuContainer>
      <StyledMenuTitle>관람 요소</StyledMenuTitle>
    </StyledMenuContainer>
  );
};

export default Preview;
