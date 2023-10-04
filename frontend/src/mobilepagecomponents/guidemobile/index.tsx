import React, { useState, useEffect } from 'react';
import useGuideStore from '../../stores/guide/useGuideStore';
import { useCourcesListHook } from '../../hooks/guide/useCourcesListHook';
import { StyledGuideContainer } from './GuideMobile.styled';
import Map from '../../pagecomponents/guide/components/kakaomap';
import {
  StyledHome,
  StyledHomeImg,
  StyledImg,
  StyledImgContainer,
  StyledList,
  StyledListContainer,
  StyledListPositionContainer,
  StyledosunMobilePage,
} from '../gosungmobile/GosungMobile.styled';
import Button from '../../mobilecomponents/button';
import List from './components/list';
import { useNavigate } from 'react-router-dom';
import useMobileGuide from '../../stores/guide/useMobileGuide';
const GuideMobile = () => {
  const { getCourcesList } = useCourcesListHook();
  const openList = useMobileGuide((state: any) => state.openList);
  const setOpenList = useMobileGuide((state: any) => state.setOpenList);
  const resetOpenList = useMobileGuide((state: any) => state.resetOpenList);
  const place = useGuideStore((state: any) => state.place);
  const Router = useNavigate();
  useEffect(() => {
    getCourcesList();
  }, []);
  return (
    <StyledosunMobilePage>
      <StyledHome
        onClick={() => {
          Router('/Expo');
        }}
      >
        <StyledHomeImg></StyledHomeImg>
      </StyledHome>
      <StyledListContainer>
        <StyledListPositionContainer>
          <StyledImgContainer onClick={() => setOpenList()}>
            <StyledImg />
          </StyledImgContainer>
          <StyledList>
            <Button label="목록보기" use="list" onClick={() => setOpenList()}></Button>
          </StyledList>
        </StyledListPositionContainer>
        {openList && <List></List>}
      </StyledListContainer>
      <Map></Map>
    </StyledosunMobilePage>
  );
};

export default GuideMobile;

// 이동 마다 지도 중심 바꾸기, 지도 좀 더 작게
