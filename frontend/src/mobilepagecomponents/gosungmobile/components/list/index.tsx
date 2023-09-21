import React from 'react';
import {
  StyledListButtonContainer,
  StyledListContainer,
  StyledListTopContainer,
  StyledButtonBox,
  StyledButton,
} from './List.styled';

const List = (props: any) => {
  console.log(props.tourList);
  // 내일 할거
  // 관광 컴포넌트 만들기
  // 카테고리 만들기
  // 카테고리 선택 시 map돌면서 해당 카테고리인 것만 보여주기
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
