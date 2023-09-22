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
import useTourStore from '../../../../stores/mobilegosung/useGosungListStore';
import axios from 'axios';
import { useTourDetailHook } from '../../../../hooks/gosung/useTourDetailHook';

const MobileTour = (props: any) => {
  const tourList = props.tourList; // 전체 리스트
  const selectCategory = useTourStore((state: any) => state.selectCategory); // 선택한 카테고리
  const setSelectCategory = useTourStore((state: any) => state.setSelectCategory);
  const resetCategory = useTourStore((state: any) => state.resetCategory);

  const tour = useTourStore((state: any) => state.tour); // 선택한 관광지
  const setTour = useTourStore((state: any) => state.setTour);
  const resetTour = useTourStore((state: any) => state.resetTour);

  const { tourDetail, getTourDetail } = useTourDetailHook();

  useEffect(() => {
    resetCategory();
    resetTour();
  }, []);

  const handleSelectCategory = (e: any) => {
    setSelectCategory(e.target.name);
  };

  const getApi = (e: any) => {
    setTour(e.name);
    console.log(e);
    getTourDetail(e.id);
    // 관광지 상세정보 조회 했음
    // 주소로 지도 위 마커 찍기
  };

  return (
    <StyldTourCategoryContainer>
      <StyledTourCategoryButtonContainer>
        <StyledTourCategoryButton name="MOUNTAIN" onClick={handleSelectCategory}>
          산
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="NATURAL" onClick={handleSelectCategory}>
          자연
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="CAMPING" onClick={handleSelectCategory}>
          캠핑
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="PARK" onClick={handleSelectCategory}>
          공원
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="MUSEUM" onClick={handleSelectCategory}>
          박물관
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="TEMPLE" onClick={handleSelectCategory}>
          사원
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="AUDITORIUM" onClick={handleSelectCategory}>
          문화재
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="OLD_HOUSE" onClick={handleSelectCategory}>
          전통가옥
        </StyledTourCategoryButton>
      </StyledTourCategoryButtonContainer>
      <StyledTourListContainer>
        {tourList.map((location: any) => {
          if (selectCategory === location.category) {
            return (
              <StyledTourContent key={location.id} onClick={() => getApi(location)}>
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
