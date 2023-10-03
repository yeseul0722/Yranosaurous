import styled from 'styled-components';

const StyledMenuContainer = styled.div`
  border: 5px solid ${(props) => props.theme.colors.main};
  height: 200px;
  margin-top: 2px;
  overflow: auto;
  border-radius: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledMenuText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 18px;
`;

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const StyledMenuName = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fonts.regularfont};
  margin-left: 5px;
`;

const StyledPrice = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fonts.regularfont};
  color: ${(props) => props.theme.colors.main};
  margin-right: 5px;
`;

export { StyledMenuContainer, StyledMenuText, StyledMenu, StyledPrice, StyledMenuName };
