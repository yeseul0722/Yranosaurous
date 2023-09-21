import React from 'react';
import {
  StyledListButtonContainer,
  StyledListContainer,
  StyledListTopContainer,
  StyledButtonBox,
  StyledButton,
} from './List.styled';

const List = () => {
  return (
    <StyledListContainer>
      <StyledListTopContainer>
        <StyledListButtonContainer>
          <StyledButtonBox>
            <StyledButton>맛집</StyledButton>
          </StyledButtonBox>
          <StyledButtonBox>
            <StyledButton>숙박</StyledButton>
          </StyledButtonBox>
          <StyledButtonBox>
            <StyledButton>관광</StyledButton>
          </StyledButtonBox>
        </StyledListButtonContainer>
      </StyledListTopContainer>
    </StyledListContainer>
  );
};

export default List;
