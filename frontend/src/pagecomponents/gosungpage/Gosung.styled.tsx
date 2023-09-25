import styled from 'styled-components';

const StyledGosungPage = styled.div`
  display: flex;
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

const StyledSideBarParent = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

const StyledSideBarContainer = styled.div`
  display: flex;
  position: absolute;
`;

export { StyledGosungPage, StyledSideBarContainer, StyledSideBarParent };
