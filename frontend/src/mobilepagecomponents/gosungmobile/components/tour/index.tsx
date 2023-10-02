import React, { useEffect, useState } from 'react';
import {
  StyldTourCategoryContainer,
  StyledTourCategoryButtonContainer,
  StyledTourCategoryButton,
  StyledTourListContainer,
  StyledTourContent,
  StyledTourContentContainer,
  StyledTourImg,
  StyledTourName,
  StyledCategotyContainer,
} from './Tour.styled';

import axios from 'axios';
import { useTourDetailHook } from '../../../../hooks/gosung/useTourDetailHook';
import useGosungListStore from '../../../../stores/mobilegosung/useGosungListStore';

const MobileTour = (props: any) => {
  const tourList = props.tourList; // 전체 리스트
  const selectCategory = useGosungListStore((state: any) => state.selectCategory); // 선택한 카테고리
  const setSelectCategory = useGosungListStore((state: any) => state.setSelectCategory);
  const resetCategory = useGosungListStore((state: any) => state.resetCategory);
  const setOpenList = useGosungListStore((state: any) => state.setOpenList);
  const tour = useGosungListStore((state: any) => state.tour); // 선택한 관광지
  const setTour = useGosungListStore((state: any) => state.setTour);
  const resetTour = useGosungListStore((state: any) => state.resetTour);
  const setRestaurantList = useGosungListStore((state: any) => state.setRestaurantList);
  const { getTourDetail } = useTourDetailHook();

  // useEffect(() => {
  //   resetCategory();
  //   resetTour();
  // }, []);

  const handleSelectCategory = (e: any) => {
    setSelectCategory(e.target.name);
    setRestaurantList();
  };

  const getApi = (e: any) => {
    setTour(e.name);
    getTourDetail(e.id);
    setOpenList();
    // 관광지 상세정보 조회 했음
    // 주소로 지도 위 마커 찍기
  };

  return (
    <StyldTourCategoryContainer>
      <StyledTourCategoryButtonContainer>
        <>
          <StyledTourCategoryButton name="MOUNTAIN" select={selectCategory} onClick={handleSelectCategory}>
            # 산
          </StyledTourCategoryButton>
          <StyledTourCategoryButton name="NATURAL" select={selectCategory} onClick={handleSelectCategory}>
            # 자연
          </StyledTourCategoryButton>
          <StyledTourCategoryButton name="CAMPING" select={selectCategory} onClick={handleSelectCategory}>
            # 캠핑
          </StyledTourCategoryButton>
          <StyledTourCategoryButton name="PARK" select={selectCategory} onClick={handleSelectCategory}>
            # 공원
          </StyledTourCategoryButton>
          <StyledTourCategoryButton name="MUSEUM" select={selectCategory} onClick={handleSelectCategory}>
            # 박물관
          </StyledTourCategoryButton>
          <StyledTourCategoryButton name="TEMPLE" select={selectCategory} onClick={handleSelectCategory}>
            # 사원
          </StyledTourCategoryButton>
          <StyledTourCategoryButton name="AUDITORIUM" select={selectCategory} onClick={handleSelectCategory}>
            # 문화재
          </StyledTourCategoryButton>
          <StyledTourCategoryButton name="OLD_HOUSE" select={selectCategory} onClick={handleSelectCategory}>
            # 전통가옥
          </StyledTourCategoryButton>
        </>
      </StyledTourCategoryButtonContainer>
      <StyledTourListContainer>
        {tourList.map((location: any) => {
          if (selectCategory === location.category) {
            return (
              <StyledTourContentContainer key={location.id} onClick={() => getApi(location)}>
                <StyledTourContent>
                  <StyledTourImg src={location.imgUrl} alt={location.name}></StyledTourImg>
                </StyledTourContent>
                <StyledTourName>{location.name}</StyledTourName>
              </StyledTourContentContainer>
            );
          }
        })}
      </StyledTourListContainer>
    </StyldTourCategoryContainer>
  );
};

export default MobileTour;
