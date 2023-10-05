import styled from 'styled-components';

type StyledCategoryContainerProps = {
  isSelected: boolean;
};

const StyledFoodCategorySection = styled.div`
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledFoodCategoryContainer = styled.div`
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const StyledFoodCategoryBox = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

const StyledFoodCategoryList = styled.button<StyledCategoryContainerProps>`
  width: 100px;
  height: 30px;
  border-radius: 30px;
  margin: 3px 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${(props) => (props.isSelected ? props.theme.colors.white : props.theme.colors.main)};
  font-family: ${(props) => props.theme.fonts.regularfont};
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.lightgray};
  background-color: ${(props) => (props.isSelected ? props.theme.colors.main : 'white')};
  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }
`;
export { StyledFoodCategorySection, StyledFoodCategoryContainer, StyledFoodCategoryList, StyledFoodCategoryBox };
