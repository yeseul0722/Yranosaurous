import styled from 'styled-components';

const StyledFoodCategorySection = styled.div`
  height: 100vh;
  overflow: auto;
`;

const StyledFoodCategoryContainer = styled.div`
  height: 200px;
  width: 360px;
  /* border: 1px solid; */
  justify-content: center;
  align-items: center;
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
  width: 120px;
  height: 30px;
  border-radius: 30px;
  margin: 3px 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.regularfont};
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.lightgray};
  background-color: white;
  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }
`;
export {
  StyledFoodCategorySection,
  StyledFoodCategoryContainer,
  StyledFoodCategoryWrap,
  StyledFoodCategoryList,
  StyledFoodCategoryBox,
};
