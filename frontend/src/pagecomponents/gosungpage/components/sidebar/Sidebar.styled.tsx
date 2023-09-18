import styled from 'styled-components';

const StyledSideBarContainer = styled.div`
  width: 50px;
`;

const StyledCategoryContainer = styled.div`
  border-bottom: 1px solid;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid;
  padding: 7px;
`;

export { StyledSideBarContainer, StyledCategoryContainer, StyledCircleContainer };
