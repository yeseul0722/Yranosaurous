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
import Tour from '../tour';
import Restaurant from '../restaurant';
import Lodgment from '../lodgment';
import useGosungListStore from '../../../../stores/mobilegosung/useGosungListStore';

const List = (props: any) => {
  const selectList = useGosungListStore((state: any) => state.selectList);
  const setSelectList = useGosungListStore((state: any) => state.setSelectList);
  const handleList = (e: any) => {
    setSelectList(e.target.id);
  };

  return (
    <StyledListContainer>
      <StyledListTopContainer>
        <StyledListButtonContainer>
          {/* <StyledButtonBox> */}
          <StyledButtonContainer id="restaurant" select={selectList} onClick={handleList}>
            <StyledButtonImageContainer id="restaurant" select={selectList} onClick={handleList}>
              <StlyedButtonImg
                id="restaurant"
                select={selectList}
                onClick={handleList}
                src="/gosung/맛집.png"
              ></StlyedButtonImg>
            </StyledButtonImageContainer>
            <StyledButton id="restaurant" select={selectList}>
              맛집
            </StyledButton>
          </StyledButtonContainer>
          {/* </StyledButtonBox> */}

          {/* <StyledButtonBox> */}

          <StyledButtonContainer id="lodgment" select={selectList} onClick={handleList}>
            <StyledButtonImageContainer id="lodgment" select={selectList} onClick={handleList}>
              <StlyedButtonImg id="lodgment" src="/gosung/숙소.png" onClick={handleList}></StlyedButtonImg>
            </StyledButtonImageContainer>
            <StyledButton id="lodgment" select={selectList}>
              숙소
            </StyledButton>
          </StyledButtonContainer>
          {/* </StyledButtonBox> */}

          {/* <StyledButtonBox> */}
          <StyledButtonContainer id="tour" select={selectList} onClick={handleList}>
            <StyledButtonImageContainer id="tour" select={selectList} onClick={handleList}>
              <StlyedButtonImg id="tour" src="/gosung/관광.png" onClick={handleList}></StlyedButtonImg>
            </StyledButtonImageContainer>
            <StyledButton id="tour" select={selectList}>
              관광
            </StyledButton>
          </StyledButtonContainer>
          {/* </StyledButtonBox> */}
        </StyledListButtonContainer>
      </StyledListTopContainer>
      <StyledOpenListCotainer>
        {selectList === 'tour' && <Tour tourList={props.tourList}></Tour>}
        {selectList === 'restaurant' && <Restaurant></Restaurant>}
        {selectList === 'lodgment' && <Lodgment></Lodgment>}
      </StyledOpenListCotainer>
    </StyledListContainer>
  );
};

export default List;
