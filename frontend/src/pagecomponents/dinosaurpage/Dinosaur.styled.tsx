import styled from 'styled-components';

const StyledDinosaurPage = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  height: 100vh;
  background-color: #000020;
`;

const StyledSidebarContainer = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid orange;
  flex: 1;
`;

const StyledCustomGlobeContainer = styled.div.attrs<any>((props) => ({}))`
  height: 100%;
  flex: auto;
`;

const StyledDinosaurListContainer = styled.div.attrs<any>((props) => ({}))`
  flex: 5;
  border-radius: 30px 0px 0px 30px;
  background-color: #ffffff5f;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export { StyledDinosaurPage, StyledCustomGlobeContainer, StyledDinosaurListContainer, StyledSidebarContainer };
