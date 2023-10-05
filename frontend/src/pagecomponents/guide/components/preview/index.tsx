import React, { useEffect } from 'react';
import {
  StyledCourceImage,
  StyledCourceImageContainer,
  StyledCourcePlace,
  StyledCourceSelectContainer,
  StyledMenuContainer,
  StyledMenuTitle,
  Test,
} from '../../Guide.styled';
import { useFestivalListHook } from '../../../../hooks/guide/useFestivalListHook';
import { usePlacesListHook } from '../../../../hooks/guide/usePlacesListHook';
import useGuideStore from '../../../../stores/guide/useGuideStore';
import useMobileGuide from '../../../../stores/guide/useMobileGuide';

const Preview = () => {
  const { getFestivalList } = useFestivalListHook();
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

  return (
    <StyledMenuContainer>
      <StyledMenuTitle>관람 요소</StyledMenuTitle>
      <Test>
        {placesList.map((place: any) => {
          if (place.type === '관람 요소') {
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

export default Preview;
