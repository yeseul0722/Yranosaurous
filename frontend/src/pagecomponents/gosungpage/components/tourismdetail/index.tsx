import React from 'react';
import { useTourismDetailStore } from '../../../../stores/gosung/tourism/useTourismDetailStore';
import {
  StyledTourismAdContainer,
  StyledTourismDetailContainer,
  StyledTourismDetailImg,
  StyledTourismImgWrap,
  StyledTourismName,
  StyledTourismInfo,
  StyledTourismAd,
  StyledTourismContent,
  StyledLocationIcon,
} from './TourismDetail.styled';

const GosungTourismDetail = () => {
  const { tourismDetail } = useTourismDetailStore();
  console.log(tourismDetail, 'detail');
  console.log('hi');

  return (
    <StyledTourismDetailContainer>
      <StyledTourismImgWrap>
        <StyledTourismDetailImg src={tourismDetail.imgUrl} />
      </StyledTourismImgWrap>
      <StyledTourismName>{tourismDetail.name}</StyledTourismName>
      <StyledTourismInfo>
        <StyledTourismAdContainer>
          <StyledLocationIcon />
          <StyledTourismAd>{tourismDetail.address}</StyledTourismAd>
        </StyledTourismAdContainer>
      </StyledTourismInfo>
      <StyledTourismContent>{tourismDetail.content}</StyledTourismContent>
    </StyledTourismDetailContainer>
  );
};

export default GosungTourismDetail;
