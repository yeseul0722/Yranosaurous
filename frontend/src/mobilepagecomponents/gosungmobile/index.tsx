import React, { useEffect, useState } from 'react';
import { StyledosunMobilePage, StyledListContainer, StyledList } from './GosungMobile.styled';
import Map from './components/kakaomap';
import Button from '../../mobilecomponents/button';
import List from './components/list';
import useTourListHook from '../../hooks/gosung/useTourListHook';

const GosungMobileComponent = () => {
  const [openList, setOpenList] = useState(false);
  const { tourList } = useTourListHook();
  return (
    <StyledosunMobilePage>
      <StyledListContainer>
        <StyledList>
          <Button label="목록보기" use="list" onClick={() => setOpenList(!openList)}></Button>
        </StyledList>
        {openList && <List tourList={tourList}></List>}
      </StyledListContainer>
      <Map></Map>
    </StyledosunMobilePage>
  );
};

export default GosungMobileComponent;
