import styled from 'styled-components';

const StyledFoodCategoryContainer = styled.div`
  height: 170px;
  width: 340px;
  border: 1px solid;
  display: flex;
  justify-content: center;
`;

const StyledFoodCategoryWrap = styled.div`
  width: 340px;
  height: 30px;

  /* display: flex; */
  justify-content: center;
`;

const StyledFoodCategoryList = styled.button`
  width: 80px;
  height: 30px;
  border: 1px solid red;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export { StyledFoodCategoryContainer, StyledFoodCategoryWrap, StyledFoodCategoryList };
