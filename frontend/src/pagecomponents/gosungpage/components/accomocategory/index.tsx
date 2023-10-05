import React, { useEffect, useState } from 'react';
import {
  StyledAccomoCategoryBox,
  StyledAccomoCategoryContainer,
  StyledAccomoCategoryList,
  StyledAccomoCategorySection,
  StyledAccomoCategoryWrap,
} from './AccomoCategory.styled';
import AccomodationListGet from '../../../../apis/gosung/AccomodationListGet';
import { useAccommodationApiStore } from '../../../../stores/gosung/accommodation/useAccommodationApiStore';
import GosungAccomoList from '../accomolist';
import { useCategoryStore } from '../../../../stores/gosung/useCategoryStore';

const GosungAccomoCategory = () => {
  const { motelData, pensionData, guesthouseData, setMotelData, setPensionData, setGuesthouseData } =
    useAccommodationApiStore();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [selectedAccomoCategory, setAccomoSelectedCategory] = useState<string>('');
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  const HandleApi = async () => {
    const response = await AccomodationListGet();
    const data = response.data.response;

    const motelItems = data.filter((item: any) => item.category === '모텔');
    const pensionItems = data.filter((item: any) => item.category === '펜션');
    const guesthouseItems = data.filter((item: any) => item.category === '게스트하우스');

    // Saving the data in the store
    setMotelData(motelItems);
    setPensionData(pensionItems);
    setGuesthouseData(guesthouseItems);
  };
  useEffect(() => {
    HandleApi();
  }, []);

  useEffect(() => {
    if (selectedCategory === '모텔') {
      setSelectedItems(motelData);
    } else if (selectedCategory === '펜션') {
      setSelectedItems(pensionData);
    } else if (selectedCategory === '게스트하우스') {
      setSelectedItems(guesthouseData);
    }
  }, [motelData, pensionData, guesthouseData, selectedCategory]);

  return (
    <StyledAccomoCategorySection>
      <StyledAccomoCategoryContainer>
        <StyledAccomoCategoryBox>
          <StyledAccomoCategoryWrap>
            <StyledAccomoCategoryList
              onClick={() => {
                setSelectedCategory('모텔');
                setSelectedMenu('모텔');
              }}
              isSelected={selectedMenu === '모텔'}
            >
              모텔
            </StyledAccomoCategoryList>
            <StyledAccomoCategoryList
              onClick={() => {
                setSelectedCategory('펜션');
                setSelectedMenu('펜션');
              }}
              isSelected={selectedMenu === '펜션'}
            >
              펜션
            </StyledAccomoCategoryList>
            <StyledAccomoCategoryList
              onClick={() => {
                setSelectedCategory('게스트하우스');
                setSelectedMenu('게스트하우스');
              }}
              isSelected={selectedMenu === '게스트하우스'}
            >
              게스트하우스
            </StyledAccomoCategoryList>
          </StyledAccomoCategoryWrap>
        </StyledAccomoCategoryBox>
      </StyledAccomoCategoryContainer>
      <GosungAccomoList accomoList={selectedItems} />
    </StyledAccomoCategorySection>
  );
};

export default GosungAccomoCategory;
