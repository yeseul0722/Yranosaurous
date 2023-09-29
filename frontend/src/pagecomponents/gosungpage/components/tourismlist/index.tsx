import React from 'react';
import { useTourismDetailStore } from '../../../../stores/gosung/tourism/useTourismDetailStore';
import { useCategoryDetailStore } from '../../../../stores/gosung/useCategoryDetailStore';
import TourismDetailGet from '../../../../apis/gosung/tourismDetailGet';
import {
  StyledTourismContainer,
  StyledTourismImg,
  StyledTourismInfo,
  StyledTourismListContainer,
  StyledTourismName,
} from './Tourismlist.styled';

interface GosungTourismListProps {
  tourismList: any[];
}

const GosungTourismList = ({ tourismList }: GosungTourismListProps) => {
  const { tourismDetail, setTourismDetail } = useTourismDetailStore();
  const { selectedDetail, setSelectedDetail } = useCategoryDetailStore();
  console.log(tourismDetail);

  const handleDetailApi = async (id: number) => {
    const response = await TourismDetailGet(id);
    setTourismDetail(response.data.response);
    setSelectedDetail(id);
  };
  return (
    <StyledTourismListContainer>
      {tourismList &&
        tourismList.map((tourism) => (
          <StyledTourismContainer key={tourism.id} onClick={() => handleDetailApi(tourism.id)}>
            <StyledTourismImg src={tourism.imgUrl}></StyledTourismImg>
            <StyledTourismInfo>
              <StyledTourismName>{tourism.name}</StyledTourismName>
            </StyledTourismInfo>
          </StyledTourismContainer>
        ))}
    </StyledTourismListContainer>
  );
};

export default GosungTourismList;
