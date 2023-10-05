import React, { useEffect } from 'react';
import {
  StyledMenuContainer,
  StyledMenuTitle,
  StyledCourceImage,
  StyledCourceImageContainer,
  StyledCourcePlace,
  StyledCourceSelectContainer,
  Test,
} from '../../Guide.styled';
import { usePlacesListHook } from '../../../../hooks/guide/usePlacesListHook';
import useGuideStore from '../../../../stores/guide/useGuideStore';
import useMobileGuide from '../../../../stores/guide/useMobileGuide';

const Facility = () => {
  const { placesList, getPlacesList, handlePlace } = usePlacesListHook();
  const selectPlace = useGuideStore((state: any) => state.selectPlace);
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

  useEffect(() => {
    console.log(placesList);
  }, [placesList]);

  return (
    <StyledMenuContainer>
      <StyledMenuTitle>편의 시설</StyledMenuTitle>
      <Test>
        {placesList.map((place: any) => {
          if (place.type === '편의 시설') {
            return (
              <StyledCourceSelectContainer
                name={place.id}
                select={selectPlace}
                key={place.id}
                onClick={() => onClick(place)}
              >
                <StyledCourceImageContainer>
                  <StyledCourceImage marker={imageArray[place.markerNumber - 1]}></StyledCourceImage>
                </StyledCourceImageContainer>
                {/* <StyledCourcePlace name={place.id} select={selectPlace}> */}
                {place.name}
                {/* </StyledCourcePlace> */}
              </StyledCourceSelectContainer>
            );
          }
        })}
      </Test>
    </StyledMenuContainer>
  );
};

export default Facility;
