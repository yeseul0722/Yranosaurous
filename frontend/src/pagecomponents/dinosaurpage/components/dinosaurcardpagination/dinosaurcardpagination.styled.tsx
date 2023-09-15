import styled from 'styled-components';

const StyledDinosaurCardPagination = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid saddlebrown;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledDinosaurCardContainer = styled.div`
  border: 1px solid #1cd7bb;
  width: 150px;
  height: 100px;
`;

const DinosaurCardPageComponent = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid salmon;
  width: 100%;
  height: 100%;
`;

export { StyledDinosaurCardPagination, StyledDinosaurCardContainer, DinosaurCardPageComponent };
