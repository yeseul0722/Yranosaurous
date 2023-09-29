import React from 'react';
import TourismListGet from '../../../../apis/gosung/tourismListGet';
import { useTourismStore } from '../../../../stores/gosung/tourism/useTourismApiStore';
import {
  StyledTourismCategoryBox,
  StyledTourismCategoryList,
  StyledTourismCategorySection,
  StyledTourismCategoryWrap,
  StyledTourismCategoryContainer,
} from './TourismCategory.styled';

import GosungTourismList from '../tourismlist';
import { useCategoryStore } from '../../../../stores/gosung/useCategoryStore';

const GosungTourismCategory = () => {
  const { tourismList, setTourismList } = useTourismStore();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();

  const handleApi = async (category: string) => {
    const response = await TourismListGet(category);

    setTourismList(response.data.response);
    setSelectedCategory(category);
  };
  return (
    <StyledTourismCategorySection>
      <StyledTourismCategoryContainer>
        <StyledTourismCategoryBox>
          <StyledTourismCategoryWrap>
            <StyledTourismCategoryList onClick={() => handleApi('MOUNTAIN')}>산</StyledTourismCategoryList>
            <StyledTourismCategoryList onClick={() => handleApi('NATURAL')}>자연</StyledTourismCategoryList>
            <StyledTourismCategoryList onClick={() => handleApi('CAMPING')}>캠핑</StyledTourismCategoryList>
          </StyledTourismCategoryWrap>
          <StyledTourismCategoryWrap>
            <StyledTourismCategoryList onClick={() => handleApi('PARK')}>공원</StyledTourismCategoryList>
            <StyledTourismCategoryList onClick={() => handleApi('MUSEUM')}>박물관</StyledTourismCategoryList>
            <StyledTourismCategoryList onClick={() => handleApi('TEMPLE')}>사원</StyledTourismCategoryList>
          </StyledTourismCategoryWrap>
          <StyledTourismCategoryWrap>
            <StyledTourismCategoryList onClick={() => handleApi('AUDITORIUM')}>문화재</StyledTourismCategoryList>
            <StyledTourismCategoryList onClick={() => handleApi('OLD_HOUSE')}>전통가옥</StyledTourismCategoryList>
          </StyledTourismCategoryWrap>
        </StyledTourismCategoryBox>
      </StyledTourismCategoryContainer>
      <GosungTourismList tourismList={tourismList} />
    </StyledTourismCategorySection>
  );
};

export default GosungTourismCategory;
