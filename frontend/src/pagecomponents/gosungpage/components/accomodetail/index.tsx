import React from 'react';
import { useAccommodationDetailStore } from '../../../../stores/gosung/accommodation/useAccommodationDetailStore';
import Rating from 'react-rating';
import {
  StyledAccommoAd,
  StyledAccommoAdContainer,
  StyledAccommoDetailContainer,
  StyledAccommoDetailImg,
  StyledAccommoImgWrap,
  StyledAccommoName,
  StyledAccomoInfo,
  StyledBanIcon,
  StyledChild,
  StyledLocationIcon,
  StyledOkIcon,
  StyledRating,
} from './Accomo.styled';

const GosungAccomoDetail = () => {
  const { accommodationDetail } = useAccommodationDetailStore();
  console.log(accommodationDetail);

  return (
    <StyledAccommoDetailContainer>
      <StyledAccommoImgWrap>
        <StyledAccommoDetailImg src={accommodationDetail.imgAddress} />
      </StyledAccommoImgWrap>
      <StyledAccommoName>{accommodationDetail.name}</StyledAccommoName>
      <StyledAccomoInfo>
        <StyledAccommoAdContainer>
          <StyledLocationIcon />
          <StyledAccommoAd>{accommodationDetail.address}</StyledAccommoAd>
        </StyledAccommoAdContainer>
        <StyledRating>
          <Rating
            readonly={true}
            initialRating={accommodationDetail.rating}
            fullSymbol={<img src="/rating/stards.png" alt="Full Star" style={{ width: '30px', height: '30px' }} />}
            emptySymbol={<img src="/rating/stards2.png" alt="Empty Star" style={{ width: '30px', height: '30px' }} />}
          />{' '}
          {accommodationDetail.rating}
        </StyledRating>
        <StyledChild>
          아이 동반:
          {accommodationDetail.child ? <StyledOkIcon /> : <StyledBanIcon />}
        </StyledChild>
      </StyledAccomoInfo>
    </StyledAccommoDetailContainer>
  );
};

export default GosungAccomoDetail;
