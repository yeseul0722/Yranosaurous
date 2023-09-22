import React, { useState } from 'react';
import {
  StyledListButtonContainer,
  StyledListContainer,
  StyledListTopContainer,
  StyledButtonBox,
  StyledButton,
} from './List.styled';
import Tour from '../tour';

const List = (props: any) => {
  const [selectList, setSelectList] = useState('');
  const onClick = (e: any) => {
    if (selectList === e.target.name) {
      setSelectList('');
    } else {
      setSelectList(e.target.name);
    }
  };

  return (
    <StyledListContainer>
      <StyledListTopContainer>
        <StyledListButtonContainer>
          <StyledButtonBox>
            <StyledButton name="restaurant" onClick={onClick}>
              맛집
            </StyledButton>
          </StyledButtonBox>
          <StyledButtonBox>
            <StyledButton name="lodgment" onClick={onClick}>
              숙박
            </StyledButton>
          </StyledButtonBox>
          <StyledButtonBox>
            <StyledButton name="tour" onClick={onClick}>
              관광
            </StyledButton>
          </StyledButtonBox>
        </StyledListButtonContainer>
      </StyledListTopContainer>
      {selectList === 'tour' && <Tour tourList={props.tourList}></Tour>}
    </StyledListContainer>
  );
};

export default List;
