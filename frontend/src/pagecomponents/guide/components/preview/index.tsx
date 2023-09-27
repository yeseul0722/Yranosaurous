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
import useGuideStore from '../../../../stores/guide/useGuideStore';

const Preview = () => {
  const { getFestivalList } = useFestivalListHook();
  const { placesList, selectPlace, getPlacesList, handlePlace } = usePlacesListHook();
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
            <StyledCourceSelectContainer
              name={place.name}
              select={selectPlace}
              key={place.id}
              onClick={() => onClick(place)}
            >
              <StyledCourceImageContainer>
                <StyledCourceImage marker={imageArray[place.markerNumber - 1]}></StyledCourceImage>
              </StyledCourceImageContainer>
              <StyledCourcePlace name={place.name} select={selectPlace}>
                {place.name}
              </StyledCourcePlace>
            </StyledCourceSelectContainer>
          );
        }
      })}
    </StyledMenuContainer>
  );
};

export default Preview;
