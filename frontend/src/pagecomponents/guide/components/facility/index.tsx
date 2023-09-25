import React, { useEffect } from 'react';
import {
  StyledMenuContainer,
  StyledMenuTitle,
  StyledMenuContentContainer,
  StyledMenuContent,
} from '../../Guide.styled';
import { usePlacesListHook } from '../../../../hooks/guide/usePlacesListHook';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const Facility = () => {
  const { placesList, getPlacesList, handlePlace } = usePlacesListHook();

  useEffect(() => {
    getPlacesList();
  }, []);

  const onClick = (place: any) => {
    handlePlace(place);
  };

  return (
    <StyledMenuContainer>
      <StyledMenuTitle>편의 시설</StyledMenuTitle>
      <StyledMenuContentContainer>
        {placesList.map((place: any) => {
          return (
            <StyledMenuContent onClick={() => onClick(place)} key={place.id}>
              {place.name}
            </StyledMenuContent>
          );
        })}
      </StyledMenuContentContainer>
    </StyledMenuContainer>
  );
};

export default Facility;
