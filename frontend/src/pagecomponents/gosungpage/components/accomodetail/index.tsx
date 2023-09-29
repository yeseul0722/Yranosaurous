import React from 'react';
import { useAccommodationDetailStore } from '../../../../stores/gosung/accommodation/useAccommodationDetailStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Rating from '@mui/material/Rating';
import {
  StyledAccommoAd,
  StyledAccommoAdContainer,
  StyledAccommoDetailContainer,
  StyledAccommoDetailImg,
  StyledAccommoImgWrap,
  StyledAccommoName,
  StyledAccomoInfo,
  StyledRating,
} from './Accomo.styled';

const GosungAccomoDetail = () => {
  const { accommodationDetail } = useAccommodationDetailStore();
  console.log(accommodationDetail);
  console.log('안녕');

  return (
    <StyledAccommoDetailContainer>
      <StyledAccommoImgWrap>
        <StyledAccommoDetailImg src={accommodationDetail.imgAddress} />
      </StyledAccommoImgWrap>
      <StyledAccommoName>{accommodationDetail.name}</StyledAccommoName>
      <StyledAccomoInfo>
        <StyledAccommoAdContainer>
          <FontAwesomeIcon icon={faLocationDot} />
          <StyledAccommoAd>{accommodationDetail.address}</StyledAccommoAd>
        </StyledAccommoAdContainer>
        <StyledRating>
          <Rating name="read-only" value={accommodationDetail.rating} readOnly /> {accommodationDetail.rating}
        </StyledRating>
      </StyledAccomoInfo>
    </StyledAccommoDetailContainer>
  );
};

export default GosungAccomoDetail;
