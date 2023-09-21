import styled from 'styled-components';

const StyledSideBarContainer = styled.div`
  min-width: 50px;
  max-width: 50px;
  height: 100vh;
  border-right: 1px solid lightgray;
`;

const StyledCategoryContainer = styled.div`
  border-bottom: 1px solid lightgray;
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
