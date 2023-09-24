import React, { useEffect, useState } from 'react';

import useTourStore from '../../../../stores/mobilegosung/useGosungListStore';
import axios from 'axios';
import { useTourDetailHook } from '../../../../hooks/gosung/useTourDetailHook';
import {
  StyldTourCategoryContainer,
  StyledTourCategoryButtonContainer,
  StyledTourCategoryButton,
  StyledTourListContainer,
  StyledTourContent,
  StyledTourImg,
  StyledTourName,
} from '../tour/Tour.styled';
import { useLodgmentListHook } from '../../../../hooks/gosung/useLodgmentListHook';
import { useLodgmentDetailHook } from '../../../../hooks/gosung/useLodgmentDetailHook';

const MobileLodgment = (props: any) => {
  const lodgment = useTourStore((state: any) => state.lodgment); // 숙소 리스트
  const selectCategory = useTourStore((state: any) => state.selectCategory); // 선택한 카테고리
  const setSelectCategory = useTourStore((state: any) => state.setSelectCategory);
  const resetCategory = useTourStore((state: any) => state.resetCategory);

  const tour = useTourStore((state: any) => state.tour); // 선택한 관광지
  const setTour = useTourStore((state: any) => state.setTour);
  const resetTour = useTourStore((state: any) => state.resetTour);

  const { getlodgmentList } = useLodgmentListHook();
  const { getLodgmentDetail } = useLodgmentDetailHook();

  useEffect(() => {
    getlodgmentList();
  }, []);

  const handleSelectCategory = (e: any) => {
    setSelectCategory(e.target.name);
  };

  const getApi = (e: any) => {
    setTour(e.name);
    getLodgmentDetail(e.id);
  };

  return (
    <StyldTourCategoryContainer>
      <StyledTourCategoryButtonContainer>
        <StyledTourCategoryButton name="모텔" onClick={handleSelectCategory}>
          모텔
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="펜션" onClick={handleSelectCategory}>
          펜션
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="게스트하우스" onClick={handleSelectCategory}>
          게스트하우스
        </StyledTourCategoryButton>
      </StyledTourCategoryButtonContainer>
      <StyledTourListContainer>
        {lodgment.map((location: any) => {
          if (selectCategory === location.category) {
            return (
              <StyledTourContent key={location.id} onClick={() => getApi(location)}>
                <StyledTourImg src={location.imgAddress} alt={location.name}></StyledTourImg>
                <StyledTourName>{location.name}</StyledTourName>
              </StyledTourContent>
            );
          }
        })}
      </StyledTourListContainer>
    </StyldTourCategoryContainer>
  );
};

export default MobileLodgment;
