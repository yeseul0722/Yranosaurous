import React, { useEffect } from 'react';
import {
  StyledCourceImage,
  StyledCourceImageContainer,
  StyledCourcePlace,
  StyledCourceSelectContainer,
  StyledMenuContainer,
  StyledMenuTitle,
} from '../../Guide.styled';
import { useFestivalListHook } from '../../../../hooks/guide/useFestivalListHook';
import { usePlacesListHook } from '../../../../hooks/guide/usePlacesListHook';

const Preview = () => {
  const { getFestivalList } = useFestivalListHook();
  const { placesList, getPlacesList, handlePlace } = usePlacesListHook();
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
  useEffect(() => {
    getPlacesList();
  }, []);

  const onClick = (place: any) => {
    handlePlace(place);
  };
  console.log(placesList);
  return (
    <StyledMenuContainer>
      <StyledMenuTitle>관람 요소</StyledMenuTitle>
      {placesList.map((place: any) => {
        if (place.type === '관람 요소') {
          return (
            <StyledCourceSelectContainer key={place.id} onClick={() => onClick(place)}>
              <StyledCourceImageContainer>
                <StyledCourceImage marker={imageArray[place.markerNumber - 1]}></StyledCourceImage>
              </StyledCourceImageContainer>
              <StyledCourcePlace>{place.name}</StyledCourcePlace>
            </StyledCourceSelectContainer>
          );
        }
      })}
    </StyledMenuContainer>
  );
};

export default Preview;
