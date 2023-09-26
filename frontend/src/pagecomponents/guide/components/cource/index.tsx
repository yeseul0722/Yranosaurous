import React, { useState, useEffect } from 'react';
import { StyledMenuContainer, StyledMenuContentContainer, StyledMenuTitle } from '../../Guide.styled';
import {
  StyledCourceImage,
  StyledCourceImageContainer,
  StyledCourceSelectContainer,
  StyledCourcePlace,
} from '../../Guide.styled';
import { useCourceHook } from '../../../../hooks/guide/useCourceHook';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const Cource = () => {
  const { cource, courseOrderList } = useCourceHook();
  const positions = useGuideStore((state: any) => state.positions);
  const imageArray = [
    'dino',
    '3d',
    'biking',
    'cafe',
    'baby',
    'food',
    'foodcart',
    'museum',
    'park',
    'plant',
    'play',
    'stroller',
    'toilet',
    'ticket',
    'drawing',
    'bridge',
  ];

  return (
    <StyledMenuContainer>
      <StyledMenuTitle>추천 코스</StyledMenuTitle>
      <StyledMenuContentContainer>
        {courseOrderList?.map((cource: any) => {
          return (
            <StyledCourceSelectContainer key={cource.id}>
              <StyledCourceImageContainer>
                <StyledCourceImage marker={imageArray[cource.place.markerNumber - 1]} />
              </StyledCourceImageContainer>
              <StyledCourcePlace>{cource.place.name}</StyledCourcePlace>
            </StyledCourceSelectContainer>
          );
        })}
      </StyledMenuContentContainer>
    </StyledMenuContainer>
  );
};

export default Cource;
