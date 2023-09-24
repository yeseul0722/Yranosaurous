import React, { useState } from 'react';
import {
  StyledListButtonContainer,
  StyledListContainer,
  StyledListTopContainer,
  StyledButtonBox,
  StyledButton,
} from './List.styled';
import Tour from '../tour';
import Restaurant from '../restaurant';
import useGosungListStore from '../../../../stores/mobilegosung/useGosungListStore';

const List = (props: any) => {
  const selectList = useGosungListStore((state: any) => state.selectList);
  const setSelectList = useGosungListStore((state: any) => state.setSelectList);
  const handleList = (e: any) => {
    setSelectList(e.target.name);
  };

  return (
    <StyledListContainer>
      <StyledListTopContainer>
        <StyledListButtonContainer>
          <StyledButtonBox>
            <StyledButton name="restaurant" onClick={handleList}>
              맛집
            </StyledButton>
          </StyledButtonBox>
          <StyledButtonBox>
            <StyledButton name="lodgment" onClick={handleList}>
              숙박
            </StyledButton>
          </StyledButtonBox>
          <StyledButtonBox>
            <StyledButton name="tour" onClick={handleList}>
              관광
            </StyledButton>
          </StyledButtonBox>
        </StyledListButtonContainer>
      </StyledListTopContainer>
      {selectList === 'tour' && <Tour tourList={props.tourList}></Tour>}
      {selectList === 'restaurant' && <Restaurant></Restaurant>}
    </StyledListContainer>
  );
};

export default List;
