import React, { useEffect } from 'react';
import {
  StyledMenuContainer,
  StyledMenuTitle,
  StyledCourceImage,
  StyledCourceImageContainer,
  StyledCourcePlace,
  StyledCourceSelectContainer,
} from '../../Guide.styled';
import { usePlacesListHook } from '../../../../hooks/guide/usePlacesListHook';

const Facility = () => {
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
      <StyledMenuTitle>편의 시설</StyledMenuTitle>
      {placesList.map((place: any) => {
        if (place.type === '편의 시설') {
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

export default Facility;

{
  /* <StyledMenuContent onClick={() => onClick(place)} key={place.id}>
              {place.name}
            </StyledMenuContent> */
}
