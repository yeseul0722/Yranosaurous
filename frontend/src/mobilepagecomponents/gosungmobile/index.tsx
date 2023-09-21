import React, { useEffect, useState } from 'react';
import { StyledosunMobilePage, StyledListContainer, StyledList } from './GosungMobile.styled';
import Map from './components/kakaomap';
import Button from '../../mobilecomponents/button';
import List from './components/list';
import TourListGet from '../../apis/tour/tourListGet';
const GosungMobileComponent = () => {
  const [openList, setOpenList] = useState(false);
  const [tourList, setTOurList] = useState();
  const getTourList = async () => {
    const response = await TourListGet();
    console.log(response.data.response);
  };
  useEffect(() => {
    getTourList();
  });

  return (
    <StyledosunMobilePage>
      <StyledListContainer>
        <StyledList>
          <Button label="목록보기" use="list" onClick={() => setOpenList(!openList)}></Button>
        </StyledList>
        {openList && <List></List>}
      </StyledListContainer>
      <Map></Map>
    </StyledosunMobilePage>
  );
};

export default GosungMobileComponent;
