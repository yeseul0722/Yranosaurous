import styled from 'styled-components';

const StyledMenuContainer = styled.div``;

const StyledMenuText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.color.main};
`;

const StyledMenu = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

export { StyledMenuContainer, StyledMenuText, StyledMenu };
