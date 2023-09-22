import styled from 'styled-components';

const StyledGuidePage = styled.div``;
const StyledMenuContainer = styled.div`
  width: 300px;
  height: 100vh;
  position: absolute;
  left: 72px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.light};
`;

const StyledMenuTitle = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid white;
  display: flex;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
`;

export { StyledGuidePage, StyledMenuContainer, StyledMenuTitle };
