import React, { useEffect, useState } from 'react';
import { StyledAccomoCategoryList, StyledAccomoCategoryWrap } from './AccomoCategory.styled';
import AccomodationListGet from '../../../../apis/gosung/AccomodationListGet';
import { useAccommodationApiStore } from '../../../../stores/gosung/accommodation/useAccommodationApiStore';

const GosungAccomoCategory = () => {
  // const [motelData, setMotelData] = useState([]);
  // const [pensionData, setPensionData] = useState([]);
  // const [guesthouseData, setGuesthouseData] = useState([]);
  const { motelData, pensionData, guestHouseData, setMotelData, setPensionData, setGuestHouseData } =
    useAccommodationApiStore();
  const [selectedCategory, setSelectedCategory] = useState('모텔');

  const HandleApi = async () => {
    const response = await AccomodationListGet();
    const data = response.data.response;

    const motelItems = data.filter((item: any) => item.category === '모텔');
    const pensionItems = data.filter((item: any) => item.category === '펜션');
    const guestHouseItems = data.filter((item: any) => item.category === '게스트하우스');

    // Saving the data in the store
    setMotelData(motelItems);
    setPensionData(pensionItems);
    setGuestHouseData(guestHouseItems);
  };
  useEffect(() => {
    HandleApi();
  }, []);

  return (
    <StyledAccomoCategoryWrap>
      <StyledAccomoCategoryList onClick={() => setSelectedCategory('모텔')}>모텔</StyledAccomoCategoryList>
      <StyledAccomoCategoryList onClick={() => setSelectedCategory('펜션')}>펜션</StyledAccomoCategoryList>
      <StyledAccomoCategoryList onClick={() => setSelectedCategory('게스트하우스')}>
        게스트하우스
      </StyledAccomoCategoryList>
    </StyledAccomoCategoryWrap>
  );
};

export default GosungAccomoCategory;
