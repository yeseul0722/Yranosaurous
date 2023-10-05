import React, { useState } from 'react';
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
  const [selectedTourismId, setSelectedTourismId] = useState<number | null>(null);

  const handleDetailApi = async (id: number) => {
    const response = await TourismDetailGet(id);
    setTourismDetail(response.data.response);
    setSelectedDetail(id);
    setSelectedTourismId(id);
  };
  return (
    <StyledTourismListContainer>
      {tourismList &&
        tourismList.map((tourism) => (
          <StyledTourismContainer
            key={tourism.id}
            onClick={() => handleDetailApi(tourism.id)}
            isSelected={selectedTourismId === tourism.id}
          >
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
