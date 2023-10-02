import styled from 'styled-components';

const StyledDinosaurPage = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const StyledMainTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  cursor: default;
  font-size: 3rem;
  position: absolute;
  z-index: 50;
  margin: 3rem;
  text-align: left;
  line-height: 157%;
`;

const StyledCustomGlobeContainer = styled.div.attrs<any>((props) => ({}))`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledDinosaurListContainer = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  z-index: 50;
  position: absolute;
  right: 0;
  height: 100%;
`;

const StyledDsListButton = styled.div`
  background-color: #0006b074;
  border-radius: 10px 0px 0px 10px;
  width: 3rem;
  height: 11rem;
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
  cursor: pointer;
`;

export {
  StyledDinosaurPage,
  StyledMainTitle,
  StyledCustomGlobeContainer,
  StyledDinosaurListContainer,
  StyledDsListButton,
};
