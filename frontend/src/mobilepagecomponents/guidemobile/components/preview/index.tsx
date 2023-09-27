import React, { useEffect } from 'react';
import { usePlacesListHook } from '../../../../hooks/guide/usePlacesListHook';
import {
  StyledMobileFacility,
  StyledMobileFacilityImage,
  StyledMobileFacilityImageContainer,
  StyledMoblilFacilitySelectContainer,
} from '../facility/Facility.styled';

const MobilePreview = () => {
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
  return (
    <div>
      {placesList.map((place: any) => {
        if (place.type === '관람 요소') {
          return (
            <StyledMoblilFacilitySelectContainer
              name={place.name}
              select={selectPlace}
              key={place.id}
              onClick={() => onClick(place)}
            >
              <StyledMobileFacilityImageContainer>
                <StyledMobileFacilityImage marker={imageArray[place.markerNumber - 1]}></StyledMobileFacilityImage>
              </StyledMobileFacilityImageContainer>
              <StyledMobileFacility name={place.name} select={selectPlace}>
                {place.name}
              </StyledMobileFacility>
            </StyledMoblilFacilitySelectContainer>
          );
        }
      })}
    </div>
  );
};

export default MobilePreview;
