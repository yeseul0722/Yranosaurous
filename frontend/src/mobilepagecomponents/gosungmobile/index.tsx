import React, { useEffect, useState } from 'react';
import { StyledosunMobilePage, StyledListContainer, StyledList, StyledHome } from './GosungMobile.styled';
import Map from './components/kakaomap';
import Button from '../../mobilecomponents/button';
import List from './components/list';
import useTourListHook from '../../hooks/gosung/useTourListHook';
import useGosungListStore from '../../stores/mobilegosung/useGosungListStore';

const GosungMobileComponent = () => {
  // const [openList, setOpenList] = useState(false);
  const openList = useGosungListStore((state: any) => state.openList);
  const setOpenList = useGosungListStore((state: any) => state.setOpenList);
  const { tourList } = useTourListHook();
  // console.log(tourList);
  return (
    <StyledosunMobilePage>
      <StyledHome href="/expo">홈</StyledHome>
      <StyledListContainer>
        <StyledList>
          <Button label="목록보기" use="list" onClick={() => setOpenList()}></Button>
        </StyledList>
        {openList && <List tourList={tourList}></List>}
      </StyledListContainer>
      <Map></Map>
    </StyledosunMobilePage>
  );
};

export default GosungMobileComponent;
