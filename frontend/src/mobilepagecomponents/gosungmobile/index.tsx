import React, { useEffect, useState } from 'react';
import {
  StyledosunMobilePage,
  StyledListContainer,
  StyledImgContainer,
  StyledImg,
  StyledList,
  StyledHome,
  StyledListPositionContainer,
  StyledHomeImg,
} from './GosungMobile.styled';
import Map from './components/kakaomap';
import Button from '../../mobilecomponents/button';
import List from './components/list';
import useTourListHook from '../../hooks/gosung/useTourListHook';
import useGosungListStore from '../../stores/mobilegosung/useGosungListStore';
import { useNavigate } from 'react-router-dom';

const GosungMobileComponent = () => {
  // const [openList, setOpenList] = useState(false);
  const openList = useGosungListStore((state: any) => state.openList);
  const setOpenList = useGosungListStore((state: any) => state.setOpenList);
  const { tourList } = useTourListHook();
  const Router = useNavigate();
  // console.log(tourList);
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
        {openList && <List tourList={tourList}></List>}
      </StyledListContainer>
      <Map></Map>
    </StyledosunMobilePage>
  );
};

export default GosungMobileComponent;
