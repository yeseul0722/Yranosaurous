import styled from 'styled-components';

const StyledSideListContainer = styled.div`
  min-width: 410px;
  max-width: 410px;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: start;
  /* position: absolute; */
  z-index: 3;
  background-color: ${(props) => props.theme.colors.white};
  border-right: 2px solid ${(props) => props.theme.colors.lightgray};
`;

const StyledMenu = styled.div`
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 30px;
  height: 100px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export { StyledSideListContainer, StyledMenu };
