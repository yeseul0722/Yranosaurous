import styled from 'styled-components';

const StyledSideBarContainer = styled.div`
  min-width: 50px;
  max-width: 50px;
  height: 100vh;
  z-index: 5;
  border-right: 1px solid ${(props) => props.theme.colors.lightgray};
`;

const StyledCategoryContainer = styled.div`
  /* border-bottom: 1px solid ${(props) => props.theme.colors.lightgray}; */
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
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
