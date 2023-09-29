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
} from './TourismDetail.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faLocationDot} />
          <StyledTourismAd>{tourismDetail.address}</StyledTourismAd>
        </StyledTourismAdContainer>
      </StyledTourismInfo>
    </StyledTourismDetailContainer>
  );
};

export default GosungTourismDetail;
