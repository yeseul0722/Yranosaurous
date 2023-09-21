import styled from 'styled-components';

const StyledCategoryContainer = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid;
  display: flex;
  flex-direction: column;
`;

const StyledCategory = styled.div`
  height: 70px;
  border: 1px solid blue;
  flex-grow: 1;
`;

const StyledCategoryList = styled.div`
  width: 30px;
  flex-grow: 1;
`;
export { StyledCategoryContainer, StyledCategory, StyledCategoryList };
