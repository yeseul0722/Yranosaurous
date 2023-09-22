import React, { useState } from 'react';
import { StyldTourCategoryContainer, StyledTourCategoryButton } from './Tour.styled';

const MobileTour = (props: any) => {
  const tourList = props.tourList;
  const [selectCategory, setSelectCategory] = useState('');
  const onClick = (e: any) => {
    if (selectCategory === e.target.name) {
      setSelectCategory('');
    } else {
      setSelectCategory(e.target.name);
    }
  };
  return (
    <StyldTourCategoryContainer>
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
    </StyldTourCategoryContainer>
  );
};

export default MobileTour;
