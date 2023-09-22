import styled from 'styled-components';

const StyledDinosaurPage = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #000020;
`;

const StyledCustomGlobeContainer = styled.div.attrs<any>((props) => ({}))`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
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
  z-index: 50;
  box-shadow: -4px 5px 3px 2px #2b2c38;
`;

export { StyledDinosaurPage, StyledCustomGlobeContainer, StyledDinosaurListContainer, StyledDsListButton };
