import React, { useState } from 'react';
import {
  StyledListButtonContainer,
  StyledListContainer,
  StyledListTopContainer,
  StyledButtonBox,
  StyledButton,
  StyledButtonContainer,
  StyledButtonImageContainer,
  StlyedButtonImg,
  StyledOpenListCotainer,
} from './List.styled';
import Cource from '../cource';
import Facility from '../facility';
import Preview from '../preview';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const List = (props: any) => {
  const selectCategory = useGuideStore((state: any) => state.selectCategory);
  const setSelectCategory = useGuideStore((state: any) => state.setSelectCategory);
  const handleList = (e: any) => {
    setSelectCategory(e.target.id);
  };

  return (
    <StyledListContainer>
      <StyledListTopContainer>
        <StyledListButtonContainer>
          {/* <StyledButtonBox> */}
          <StyledButtonContainer id="cource" select={selectCategory} onClick={handleList}>
            <StyledButtonImageContainer id="cource" select={selectCategory}>
              <StlyedButtonImg src="/gosung/맛집.png"></StlyedButtonImg>
            </StyledButtonImageContainer>
            <StyledButton id="cource" select={selectCategory} onClick={handleList}>
              추천 코스
            </StyledButton>
          </StyledButtonContainer>
          {/* </StyledButtonBox> */}
          {/* <StyledButtonBox> */}
          <StyledButtonContainer id="facility" select={selectCategory} onClick={handleList}>
            <StyledButtonImageContainer id="facility" select={selectCategory}>
              <StlyedButtonImg src="/gosung/맛집.png"></StlyedButtonImg>
            </StyledButtonImageContainer>
            <StyledButton id="facility" select={selectCategory} onClick={handleList}>
              편의 시설
            </StyledButton>
          </StyledButtonContainer>
          {/* </StyledButtonBox> */}
          {/* <StyledButtonBox> */}
          <StyledButtonContainer id="preview" select={selectCategory} onClick={handleList}>
            <StyledButtonImageContainer id="preview" select={selectCategory}>
              <StlyedButtonImg src="/gosung/맛집.png"></StlyedButtonImg>
            </StyledButtonImageContainer>
            <StyledButton id="preview" select={selectCategory} onClick={handleList}>
              관람 요소
            </StyledButton>
          </StyledButtonContainer>
          {/* </StyledButtonBox> */}
        </StyledListButtonContainer>
      </StyledListTopContainer>
      {selectCategory === 'cource' && <Cource></Cource>}
      {selectCategory === 'facility' && <Facility></Facility>}
      {selectCategory === 'preview' && <Preview></Preview>}
    </StyledListContainer>
  );
};

export default List;
