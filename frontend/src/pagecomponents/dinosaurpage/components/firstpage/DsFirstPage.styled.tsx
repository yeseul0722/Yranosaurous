import styled from 'styled-components';

const StyledDinosaurPage = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #000020;
`;

const StyledSidebarContainer = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid orange;
  /* flex: 1; */
`;

const StyledCustomGlobeContainer = styled.div.attrs<any>((props) => ({}))`
  height: 100%;
  /* flex: auto; */
`;

const StyledDinosaurListContainer = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  /* flex: 6; */
`;

const StyledDsListButton = styled.div`
  background-color: #0006b074;
  border-radius: 10px 0px 0px 10px;
  width: 3rem;
  height: 8rem;
  margin-top: 5rem;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.boldfont};
  writing-mode: vertical-lr;
  text-orientation: upright;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  StyledDinosaurPage,
  StyledCustomGlobeContainer,
  StyledDinosaurListContainer,
  StyledDsListButton,
  StyledSidebarContainer,
};