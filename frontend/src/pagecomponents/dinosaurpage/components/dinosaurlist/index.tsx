import React from 'react';
import DinosaurCardCompnents from '../dinosaurcard';
import {
  StyledDinosaurListPage,
  StyledDinosaurListTitle,
  StyledDinosaurListContainer,
  StyledTitleText,
} from './Dinosaurlist.styled';
import DinosaurCardPaginationComponent from '../dinosaurcardpagination';

const DinosaurListComponent = () => {
  return (
    <StyledDinosaurListPage>
      <StyledDinosaurListTitle>
        <StyledTitleText>이런 공룡들이 있어요!</StyledTitleText>
      </StyledDinosaurListTitle>
      <StyledDinosaurListContainer>
        <DinosaurCardPaginationComponent></DinosaurCardPaginationComponent>
      </StyledDinosaurListContainer>
    </StyledDinosaurListPage>
  );
};

export default DinosaurListComponent;
