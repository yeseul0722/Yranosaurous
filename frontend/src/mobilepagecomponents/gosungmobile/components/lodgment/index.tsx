import React, { useEffect, useState } from 'react';

import useGosungListStore from '../../../../stores/mobilegosung/useGosungListStore';
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
  StyledCategotyContainer,
  StyledTourContentContainer,
} from '../tour/Tour.styled';
import { useLodgmentListHook } from '../../../../hooks/gosung/useLodgmentListHook';
import { useLodgmentDetailHook } from '../../../../hooks/gosung/useLodgmentDetailHook';

import {
  StyledRestaurantContainer,
  StyledRestaurantContent,
  StyledRestaurantHashTag,
  StyledRestaurantHashTagContainer,
  StyledRestaurantImg,
  StyledRestaurantImgBox,
  StyledRestaurantImgContainer,
  StyledRestaurantInfoContainer,
  StyledRestaurantName,
  StyledRatinContainer,
  StyledRating,
} from '../restaurant/Restaurant.styled';

import Rating from 'react-rating';

const MobileLodgment = (props: any) => {
  const lodgment = useGosungListStore((state: any) => state.lodgment); // 숙소 리스트
  const selectCategory = useGosungListStore((state: any) => state.selectCategory); // 선택한 카테고리
  const setSelectCategory = useGosungListStore((state: any) => state.setSelectCategory);
  const resetCategory = useGosungListStore((state: any) => state.resetCategory);
  const setOpenList = useGosungListStore((state: any) => state.setOpenList);
  const tour = useGosungListStore((state: any) => state.tour); // 선택한 관광지
  const setTour = useGosungListStore((state: any) => state.setTour);
  const resetLodgmentDetail = useGosungListStore((state: any) => state.resetLodgmentDetail);
  const setRestaurantList = useGosungListStore((state: any) => state.setRestaurantList);
  const { getlodgmentList } = useLodgmentListHook();
  const { getLodgmentDetail } = useLodgmentDetailHook();

  useEffect(() => {
    getlodgmentList();
  }, []);

  const handleSelectCategory = (e: any) => {
    setSelectCategory(e.target.name);
    setRestaurantList(null);
  };

  const getApi = (e: any) => {
    setOpenList();
    setTour(e.name);
    getLodgmentDetail(e.id);
  };

  return (
    <StyldTourCategoryContainer>
      <StyledTourCategoryButtonContainer>
        <StyledTourCategoryButton name="모텔" select={selectCategory} onClick={handleSelectCategory}>
          # 모텔
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="펜션" select={selectCategory} onClick={handleSelectCategory}>
          # 펜션
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="게스트하우스" select={selectCategory} onClick={handleSelectCategory}>
          # 게스트하우스
        </StyledTourCategoryButton>
      </StyledTourCategoryButtonContainer>
      {/* <StyledTourListContainer>
        {lodgment.map((location: any) => {
          if (selectCategory === location.category) {
            return (
              <StyledTourContentContainer key={location.id} onClick={() => getApi(location)}>
                <StyledTourContent>
                  <StyledTourImg src={location.imgAddress} alt={location.name}></StyledTourImg>
                </StyledTourContent>
                <StyledTourName>{location.name}</StyledTourName>
              </StyledTourContentContainer>
            );
          }
        })}
      </StyledTourListContainer> */}
      <StyledRestaurantContainer>
        {lodgment?.map((location: any) => {
          if (selectCategory === location.category) {
            return (
              <StyledRestaurantContent key={location.id} onClick={() => getApi(location)}>
                <StyledRestaurantImgContainer>
                  <StyledRestaurantImgBox>
                    <StyledRestaurantImg src={location.imgAddress} alt={location.name}></StyledRestaurantImg>
                  </StyledRestaurantImgBox>
                </StyledRestaurantImgContainer>
                <StyledRestaurantInfoContainer>
                  <StyledRestaurantName> | {location.name}</StyledRestaurantName>
                  <StyledRestaurantHashTagContainer>
                    <StyledRestaurantHashTag>{location.address}</StyledRestaurantHashTag>
                  </StyledRestaurantHashTagContainer>
                  <StyledRatinContainer>
                    <StyledRating>{location.rating}</StyledRating>
                    <Rating
                      readonly={true}
                      initialRating={location.rating}
                      fullSymbol={
                        <img src="/rating/stards.png" alt="Full Star" style={{ maxWidth: '15px', maxHeight: '15px' }} />
                      }
                      emptySymbol={
                        <img
                          src="/rating/stards2.png"
                          alt="Empty Star"
                          style={{ maxWidth: '15px', maxHeight: '15px' }}
                        />
                      }
                      fractions={10}
                    ></Rating>
                  </StyledRatinContainer>
                </StyledRestaurantInfoContainer>
              </StyledRestaurantContent>
            );
          }
        })}
      </StyledRestaurantContainer>
    </StyldTourCategoryContainer>
  );
};

export default MobileLodgment;
