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
const GuideMobile = () => {
  const { getCourcesList } = useCourcesListHook();
  const [openList, setOpenList] = useState(false);
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
          <StyledImgContainer onClick={() => setOpenList(!openList)}>
            <StyledImg />
          </StyledImgContainer>
          <StyledList>
            <Button label="목록보기" use="list" onClick={() => setOpenList(!openList)}></Button>
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
