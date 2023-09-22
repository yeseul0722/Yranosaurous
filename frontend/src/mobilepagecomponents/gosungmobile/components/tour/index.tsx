import React, { useEffect, useState } from 'react';
import {
  StyldTourCategoryContainer,
  StyledTourCategoryButtonContainer,
  StyledTourCategoryButton,
  StyledTourListContainer,
  StyledTourContent,
  StyledTourImg,
  StyledTourName,
} from './Tour.styled';
import useTourStore from '../../../../stores/mobilegosung/useTourStore';

const MobileTour = (props: any) => {
  const tourList = props.tourList;
  const tour = useTourStore((state: any) => state.tour);
  const setTour = useTourStore((state: any) => state.setTour);
  const [selectCategory, setSelectCategory] = useState('');
  const onClick = (e: any) => {
    if (selectCategory === e.target.name) {
      setSelectCategory('');
    } else {
      setSelectCategory(e.target.name);
    }
  };
  useEffect(() => {
    console.log(tour);
  }, [tour]);
  return (
    <StyldTourCategoryContainer>
      <StyledTourCategoryButtonContainer>
        <StyledTourCategoryButton name="MOUNTAIN" onClick={onClick}>
          산
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="NATURAL" onClick={onClick}>
          자연
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="CAMPING" onClick={onClick}>
          캠핑
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="PARK" onClick={onClick}>
          공원
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="MUSEUM" onClick={onClick}>
          박물관
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="TEMPLE" onClick={onClick}>
          사원
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="AUDITORIUM" onClick={onClick}>
          문화재
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="OLD_HOUSE" onClick={onClick}>
          전통가옥
        </StyledTourCategoryButton>
      </StyledTourCategoryButtonContainer>
      <StyledTourListContainer>
        {tourList.map((location: any) => {
          if (selectCategory === location.category) {
            return (
              <StyledTourContent key={location.id} onClick={() => setTour(location.name)}>
                <StyledTourImg src={location.imgUrl} alt={location.name}></StyledTourImg>
                <StyledTourName>{location.name}</StyledTourName>
              </StyledTourContent>
            );
          }
        })}
      </StyledTourListContainer>
    </StyldTourCategoryContainer>
  );
};

export default MobileTour;
