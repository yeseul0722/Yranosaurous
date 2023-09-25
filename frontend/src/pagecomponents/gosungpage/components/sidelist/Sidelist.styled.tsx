import styled from 'styled-components';

const StyledSideListContainer = styled.div`
  min-width: 360px;
  max-width: 360px;
  flex-direction: column;
  display: flex;
  align-items: start;
`;

const StyledMenu = styled.div`
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 25px;
  height: 100px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export { StyledSideListContainer, StyledMenu };
