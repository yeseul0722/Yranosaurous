import React, { useState } from 'react';
import TourismListGet from '../../../../apis/gosung/tourismListGet';
import { useTourismStore } from '../../../../stores/gosung/tourism/useTourismApiStore';
import {
  StyledTourismCategoryBox,
  StyledTourismCategoryList,
  StyledTourismCategorySection,
  StyledTourismCategoryContainer,
} from './TourismCategory.styled';

import GosungTourismList from '../tourismlist';
import { useCategoryStore } from '../../../../stores/gosung/useCategoryStore';

const GosungTourismCategory = () => {
  const { tourismList, setTourismList } = useTourismStore();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  const handleApi = async (category: string) => {
    const response = await TourismListGet(category);

    setTourismList(response.data.response);
    setSelectedCategory(category);
  };
  return (
    <StyledTourismCategorySection>
      <StyledTourismCategoryContainer>
        <StyledTourismCategoryBox>
          <StyledTourismCategoryList
            onClick={() => {
              handleApi('MOUNTAIN');
              setSelectedMenu('산');
            }}
            isSelected={selectedMenu === '산'}
          >
            산
          </StyledTourismCategoryList>
          <StyledTourismCategoryList
            onClick={() => {
              handleApi('NATURAL');
              setSelectedMenu('자연');
            }}
            isSelected={selectedMenu === '자연'}
          >
            자연
          </StyledTourismCategoryList>
          <StyledTourismCategoryList
            onClick={() => {
              handleApi('CAMPING');
              setSelectedMenu('캠핑');
            }}
            isSelected={selectedMenu === '캠핑'}
          >
            캠핑
          </StyledTourismCategoryList>

          <StyledTourismCategoryList
            onClick={() => {
              handleApi('PARK');
              setSelectedMenu('공원');
            }}
            isSelected={selectedMenu === '공원'}
          >
            공원
          </StyledTourismCategoryList>
          <StyledTourismCategoryList
            onClick={() => {
              handleApi('MUSEUM');
              setSelectedMenu('박물관');
            }}
            isSelected={selectedMenu === '박물관'}
          >
            박물관
          </StyledTourismCategoryList>
          <StyledTourismCategoryList
            onClick={() => {
              handleApi('TEMPLE');
              setSelectedMenu('사원');
            }}
            isSelected={selectedMenu === '사원'}
          >
            사원
          </StyledTourismCategoryList>

          <StyledTourismCategoryList
            onClick={() => {
              handleApi('AUDITORIUM');
              setSelectedMenu('문화재');
            }}
            isSelected={selectedMenu === '문화재'}
          >
            문화재
          </StyledTourismCategoryList>
          <StyledTourismCategoryList
            onClick={() => {
              handleApi('OLD_HOUSE');
              setSelectedMenu('전통가옥');
            }}
            isSelected={selectedMenu === '전통가옥'}
          >
            전통가옥
          </StyledTourismCategoryList>
        </StyledTourismCategoryBox>
      </StyledTourismCategoryContainer>
      <GosungTourismList tourismList={tourismList} />
    </StyledTourismCategorySection>
  );
};

export default GosungTourismCategory;
