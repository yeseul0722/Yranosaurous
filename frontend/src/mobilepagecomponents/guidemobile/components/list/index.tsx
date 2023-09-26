import React, { useState } from 'react';
import {
  StyledListButtonContainer,
  StyledListContainer,
  StyledListTopContainer,
  StyledButtonBox,
  StyledButton,
} from './List.styled';
import Cource from '../cource';
import Facility from '../facility';
import Preview from '../preview';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const List = (props: any) => {
  const selectCategory = useGuideStore((state: any) => state.selectCategory);
  const setSelectCategory = useGuideStore((state: any) => state.setSelectCategory);
  const handleList = (e: any) => {
    setSelectCategory(e.target.name);
  };

  return (
    <StyledListContainer>
      <StyledListTopContainer>
        <StyledListButtonContainer>
          <StyledButtonBox>
            <StyledButton name="cource" select={selectCategory} onClick={handleList}>
              추천 코스
            </StyledButton>
          </StyledButtonBox>
          <StyledButtonBox>
            <StyledButton name="facility" select={selectCategory} onClick={handleList}>
              편의 시설
            </StyledButton>
          </StyledButtonBox>
          <StyledButtonBox>
            <StyledButton name="preview" select={selectCategory} onClick={handleList}>
              관람 요소
            </StyledButton>
          </StyledButtonBox>
        </StyledListButtonContainer>
      </StyledListTopContainer>
      {selectCategory === 'cource' && <Cource></Cource>}
      {selectCategory === 'facility' && <Facility></Facility>}
      {selectCategory === 'preview' && <Preview></Preview>}
    </StyledListContainer>
  );
};

export default List;
