import React, { useEffect } from 'react';
import { usePlacesListHook } from '../../../../hooks/guide/usePlacesListHook';
import {
  StyledMoblilFacilitySelectContainer,
  StyledMobileFacilityImageContainer,
  StyledMobileFacilityImage,
  StyledMobileFacilityContainer,
  StyledMobileFacility,
} from './Facility.styled';
import useMobileGuide from '../../../../stores/guide/useMobileGuide';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const MobileFacility = () => {
  const { place, placesList, getPlacesList, handlePlace } = usePlacesListHook();
  const setOpenList = useMobileGuide((state: any) => state.setOpenList);
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
    setOpenList();
    console.log(place);
  }, [place]);
  return (
    <div style={{ maxHeight: '50vh', overflow: 'scroll' }}>
      {placesList.map((place: any) => {
        if (place.type === '편의 시설') {
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
              <StyledMobileFacilityContainer>
                <StyledMobileFacility name={place.name} select={selectPlace}>
                  {place.name}
                </StyledMobileFacility>
              </StyledMobileFacilityContainer>
            </StyledMoblilFacilitySelectContainer>
          );
        }
      })}
    </div>
  );
};

export default MobileFacility;
