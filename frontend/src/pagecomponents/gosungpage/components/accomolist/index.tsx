import React, { useEffect } from 'react';
import {
  StyledAccomoContainer,
  StyledAccomoImg,
  StyledAccomoListContainer,
  StyledAccomoListInfo,
  StyledAccomoRating,
  StyledAccomoStoreName,
} from './AccomoList.styled';
import AccomodationDetailGet from '../../../../apis/gosung/accomodationDetailGet';
import { useAccommodationDetailStore } from '../../../../stores/gosung/accommodation/useAccommodationDetailStore';
import { useCategoryDetailStore } from '../../../../stores/gosung/useCategoryDetailStore';
import Rating from 'react-rating';

interface GosungAccomoListProps {
  accomoList: any[];
}

const GosungAccomoList = ({ accomoList }: GosungAccomoListProps) => {
  const { accommodationDetail, setAccommodationDetail } = useAccommodationDetailStore();
  const { selectedDetail, setSelectedDetail } = useCategoryDetailStore();

  const handleDetailApi = async (id: number) => {
    const response = await AccomodationDetailGet(id);
    setAccommodationDetail(response.data.response);
    setSelectedDetail(id);
  };

  return (
    <StyledAccomoListContainer>
      {accomoList &&
        accomoList.map((accomo) => (
          <StyledAccomoContainer key={accomo.id} onClick={() => handleDetailApi(accomo.id)}>
            <StyledAccomoImg src={accomo.imgAddress}></StyledAccomoImg>
            <StyledAccomoListInfo>
              <StyledAccomoStoreName>{accomo.name}</StyledAccomoStoreName>
              <Rating
                readonly={true}
                initialRating={accomo.rating}
                fullSymbol={<img src="/rating/stards.png" alt="Full Star" style={{ width: '25px', height: '25px' }} />}
                emptySymbol={
                  <img src="/rating/stards2.png" alt="Empty Star" style={{ width: '25px', height: '25px' }} />
                }
              />
              <StyledAccomoRating>{accomo.rating}</StyledAccomoRating>
            </StyledAccomoListInfo>
          </StyledAccomoContainer>
        ))}
    </StyledAccomoListContainer>
  );
};

export default GosungAccomoList;
