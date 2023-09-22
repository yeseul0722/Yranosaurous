import styled from 'styled-components';

const StyledFoodCategoryContainer = styled.div`
  height: 200px;
  width: 340px;
  border: 1px solid;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const StyledFoodCategoryBox = styled.div`
  height: auto;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const StyledFoodCategoryWrap = styled.div`
  width: auto;
  height: auto;

  display: flex;
  justify-content: center;
`;

const StyledFoodCategoryList = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid pink;
  border-radius: 30px;
  margin: 3px 10px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export { StyledFoodCategoryContainer, StyledFoodCategoryWrap, StyledFoodCategoryList, StyledFoodCategoryBox };
