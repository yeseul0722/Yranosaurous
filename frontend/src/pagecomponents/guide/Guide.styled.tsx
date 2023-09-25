import styled from 'styled-components';

const StyledGuidePage = styled.div``;
const StyledMenuContainer = styled.div`
  width: 300px;
  height: 100vh;
  position: absolute;
  left: 72px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledMenuTitle = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  display: flex;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.light};
`;

const StyledMenuContentContainer = styled.div``;

const StyledMenuContent = styled.div`
  width: 100%;
  height: 60px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export { StyledGuidePage, StyledMenuContainer, StyledMenuTitle, StyledMenuContentContainer, StyledMenuContent };
